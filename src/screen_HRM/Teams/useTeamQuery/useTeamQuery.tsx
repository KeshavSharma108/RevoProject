import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
// import {
//   getTeamDetailsById,
//   getTeams,
// } from "../../../useFunctions/team/teamFunction";
// import { getUsers } from "../../../useFunctions/user/userFunctions";
import { getTeams } from "../../../api/hrm/teamApi";
import { TeamApiResponse, TeamMember } from "../../../types/hrm/team";

interface UseTeamQueryParams {
    search?: string;
    userId?: string;
}
export const useTeamQuery = ({ search = "", userId }: UseTeamQueryParams) => {
    const res = useInfiniteQuery<TeamApiResponse>({
        queryKey: ["teams", search, userId],
        queryFn: ({ pageParam = 1 }) => getTeams({ pageParam, search, userId }),
        getNextPageParam: (lastPage) => {
            return lastPage?.pagination?.hasNext
                ? lastPage.pagination.currentPage + 1
                : undefined;
        },
        initialPageParam: 1,
        staleTime: 1000 * 60 * 10, // 10 minutes
    });
    // Flatten the data from the response to an array of TeamMembers
    const data: TeamMember[] = res.data?.pages?.flatMap((page) => page.data) || [];

    return { ...res, data };
};

// export const useGetAgent = ({ search }) => {
//   let res = useInfiniteQuery({
//     queryKey: ["getUsers", "agent", search],
//     queryFn: ({ pageParam = 1 }) =>
//       getUsers({
//         pageParam,
//         search,
//         status: "approved",
//         role: "agent",
//       }),
//     getNextPageParam: (lastPage, allPages) => {
//       return lastPage?.pagination?.hasNext
//         ? parseInt(lastPage?.pagination?.currentPage) + 1
//         : undefined;
//     },
//     staleTime: 1000 * 60 * 10,
//   });
//   let data = [];
//   if (res) {
//     data = res?.data?.pages?.map((page) => page?.data).flat();
//   }
//   return { ...res, data };
// };

// export const useGetAgents = ({ search = "", status = "approved" }) => {
//   return useInfiniteQuery({
//     queryKey: ["getUsers", { status, search }],
//     queryFn: ({ pageParam = 1 }) =>
//       getUsers({
//         pageParam,
//         search,
//         status,
//       }),
//     getNextPageParam: (lastPage) => {
//       return lastPage?.pagination?.hasNext
//         ? parseInt(lastPage.pagination.currentPage) + 1
//         : undefined;
//     },
//     staleTime: 1000 * 60 * 10,
//   });
// };


// export const useGetTeamLead = ({ search }) => {
//   let res = useInfiniteQuery({
//     queryKey: ["getUsers", "teamLead", search],
//     queryFn: ({ pageParam = 1 }) =>
//       getUsers({
//         pageParam,
//         search,
//         status: "approved",
//         role: "teamLead",
//       }),
//     getNextPageParam: (lastPage, allPages) => {
//       return lastPage?.pagination?.hasNext
//         ? parseInt(lastPage?.pagination?.currentPage) + 1
//         : undefined;
//     },
//     staleTime: 1000 * 60 * 10,
//   });
//   let data = [];
//   if (res) {
//     data = res?.data?.pages?.map((page) => page?.data).flat();
//   }
//   return { ...res, data };
// };

// export const useGetManager = ({ search }) => {
//   let res = useInfiniteQuery({
//     queryKey: ["getUsers", "manager", search],
//     queryFn: ({ pageParam = 1 }) =>
//       getUsers({
//         pageParam,
//         search,
//         status: "approved",
//         role: "manager",
//       }),
//     getNextPageParam: (lastPage, allPages) => {
//       return lastPage?.pagination?.hasNext
//         ? parseInt(lastPage?.pagination?.currentPage) + 1
//         : undefined;
//     },
//     staleTime: 1000 * 60 * 10,
//   });
//   let data = [];
//   if (res) {
//     data = res?.data?.pages?.map((page) => page?.data).flat();
//   }
//   return { ...res, data };
// };

// export const useGetTeamById = (id) => {
//   let res = useQuery({
//     queryKey: ["team", id],
//     queryFn: () => getTeamDetailsById(id),
//     staleTime: 1000 * 60 * 10,
//     enabled: !!id,
//   });
//   return res;
// };
