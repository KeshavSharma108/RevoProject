import { showError, showSuccess } from "../../utils/toastModalFunction";
import { API_AXIOS } from "../axiosInstance";

interface GetUsersPrams {
    pageParam: number;
    limit?: number;
    status?: string;
    search?: string;
    role?: string;
}
export const getUsers = async ({
    pageParam = 1,
    limit = 10,
    status = "new",
    search,
    role
}: GetUsersPrams) => {
    try {
        const { data } = await API_AXIOS.get(`users`, {
            params: { page: pageParam, status, limit, search, role },
        });
        return data || {};
    } catch (error) {
        showError(error?.response?.data?.message);
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

export const addUser = async (values) => {
    try {
        const { data } = await API_AXIOS.post(`users`, values);
        showSuccess(data?.message);
        return data || {};
    } catch (error) {
        console.log('addUser', error);
        showError(error?.response?.data?.message);
        throw new Error(error.response.data.message || "Something went wrong");
    }
};

export const changeUserStatus = async ({ userId = "", status = "" }) => {
    try {
        const { data } = await API_AXIOS.post(`users/userStatusChangeById`, {
            userId,
            status,
        });
        showSuccess(data?.message);
        return data || {};
    } catch (error) {
        showError(error?.response?.data?.message);
        throw new Error(error.response.data.error || "Something went wrong");
        // console.log(error);
    }
};

export const getUserDetailsById = async (id) => {
    try {
        const { data } = await API_AXIOS.post(`users/getUserDetailsById`, {
            userId: id,
        });
        return data.data || {};
    } catch (error) {
        showError(error?.response?.data?.message);
        console.error(error.response.data.error || "Something went wrong")
    }
};

export const userPermanantDelete = async ({ userId = "" }) => {
    try {
        const response = await API_AXIOS.post(`users/permanentDelete`, { userId });
        const data = response.data;
        showSuccess(data?.message);
        return data || {};
    } catch (error) {
        showError(error?.response?.data?.message || "Something went wrong");
        throw new Error(error.response.data.error || "Something went wrong");
    }
};
//not in use this logout function please see auth.js
export const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
};
