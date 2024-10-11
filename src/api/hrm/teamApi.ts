import { GetTeamsParams, TeamApiResponse } from "../../types/hrm/team";
import { myConsole } from "../../utils/myConsole";
// import { showSuccess, showError } from "../../utils/toastHelpers";
import { API_AXIOS } from "../axiosInstance";

// export const getTeams = async ({ pageParam = 1, search = "", userId }) => {
//     try {
//         const { data } = await API_AXIOS.get(`team`, {
//             params: {
//                 page: pageParam,
//                 userId,
//                 search,
//             },
//         });
//         myConsole('data', data)
//         return data || {};
//     } catch (error) {
//         console.log(error);
//     }
// };
export const getTeams = async ({ pageParam = 1, search = "", userId }: GetTeamsParams): Promise<TeamApiResponse> => {
    try {
        const { data } = await API_AXIOS.get<TeamApiResponse>(`team`, {
            params: {
                page: pageParam,
                userId,
                search,
            },
        });
        console.log('data', data); // Logging can be replaced by your custom logger
        return data;
    } catch (error) {
        console.error('Error fetching teams:', error);
        throw new Error('Unable to fetch teams');
    }
};

export const addTeam = async ({ data }) => {
    try {
        const res = await API_AXIOS.post("team", data);
        // showSuccess(res?.data?.message || "Team Added successfully ");
        return res.data;
    } catch (error) {
        console.log("AddTeam Error", error);
        // showError(error?.response?.data?.message || "Something went wrong");
        // useCustomToast().showError({
        //   message: error || 'internal server Errror '
        // })
    }
};

export const updateTeam = async ({ data, id }) => {
    try {
        const res = await API_AXIOS.put(`team/updateById/${id}`, data);
        // showSuccess(res?.data?.message || "Team Updated successfully M");
        return res.data;
    } catch (error) {
        // showError(error?.response?.data?.message || "Something went wrong");
        console.log("AddTeam Error", error);
    }
};
export const getTeamDetailsById = async (id) => {
    try {
        const res = await API_AXIOS.get(`team/${id}`);
        return res.data;
    } catch (error) {
        console.error("Team Details Error:", error);
        throw error;
    }
};

export const teamDelete = async (data) => {
    console.log("data", data);
    try {
        console.log("inn");
        const { data: resData } = await API_AXIOS.post(`team/teamDelete`, { data });

        // showSuccess(resData?.message);
        return resData || {};
    } catch (error) {
        console.log(error);
        // showError(error?.response?.data?.message || "Something went wrong");
        throw new Error(error.response.data.error || "Something went wrong");
    }
};
