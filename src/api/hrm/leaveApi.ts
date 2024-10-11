// leaveFunctions.js

import { useQueryClient } from "@tanstack/react-query";
import { API_AXIOS } from "../../http/interceptor";
import Apis from "../../utils/apis";
import { showError, showSuccess } from "../../utils/toastHelpers";

// Centralized error handler
const handleError = (error) => {
    const errorMessage = error.response?.data?.message || "Something went wrong";
    showError(errorMessage);
    throw new Error(errorMessage);
};

// Generic API request function
const apiRequest = async (method, url, data) => {
    try {
        const { data: responseData } = await API_AXIOS[method](url, data);
        return responseData;
    } catch (error) {
        handleError(error);
    }
};

export const applyLeave = async (values) => {
    const { message } = await apiRequest('post', `${Apis.leave}`, values);
    showSuccess(message);
};

export const getLeaves = async ({ pageParam = 1, limit = 10, status = "new", search, start, end }) => {
    return await apiRequest('get', `${Apis.leave}`, {
        params: { page: pageParam, status, limit, search, start, end },
    });
};

export const getLeaveById = async (id) => {
    return await apiRequest('get', `${Apis.leaveDetailsById}/${id}`);
};

export const approveLeaveById = async (id) => {
    const { message } = await apiRequest('post', `${Apis.leaveApproveById}/${id}`);
    showSuccess(message || "Leave approved successfully");
};

export const rejectLeaveById = async (id) => {
    const { message } = await apiRequest('post', `${Apis.leaveRejectById}/${id}`);
    showSuccess(message || "Leave successfully rejected");
};

export const onHoldLeaveById = async (id) => {
    const { message } = await apiRequest('post', `${Apis.leaveOnHoldById}/${id}`);
    showSuccess(message || "Leave successfully put on hold");
};

// Use leave actions hook
export const useLeaveActions = () => {
    const queryClient = useQueryClient();

    const leaveAction = async (action, id) => {
        const { data } = await apiRequest('post', action);
        queryClient.refetchQueries(["leaves"]);
        queryClient.setQueriesData(["leave", id], () => data);
        return data;
    };

    const approveLeaveById = async (id) => {
        await leaveAction(`${Apis.leaveApproveById}/${id}`, id);
        showSuccess("Leave approved successfully");
    };

    const rejectLeaveById = async (id) => {
        await leaveAction(`${Apis.leaveRejectById}/${id}`, id);
        showSuccess("Leave successfully rejected");
    };

    const onHoldLeaveById = async (id) => {
        await leaveAction(`${Apis.leaveOnHoldById}/${id}`, id);
        showSuccess("Leave successfully put on hold");
    };

    const reviseLeaveById = async ({ id, sendData }) => {
        const { message } = await apiRequest('post', `leave/reviseLeavesById/${id}`, sendData);
        showSuccess(message || "Leave successfully revised");
    };

    const reviseAcceptRejById = async ({ id, status }) => {
        const { message } = await apiRequest('post', `leave/reviseAcceptRejById/${id}`, { status });
        showSuccess(message || "Leave Dates approved successfully");
    };

    const cancelLeaveById = async ({ id }) => {
        const { message } = await apiRequest('post', `leave/cancelLeaveById/${id}`);
        showSuccess(message || "Leave Cancelled successfully");
    };

    return {
        approveLeaveById,
        rejectLeaveById,
        onHoldLeaveById,
        reviseLeaveById,
        reviseAcceptRejById,
        cancelLeaveById,
    };
};
