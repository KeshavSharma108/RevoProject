import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getUserDetailsById, getUsers } from "../../../api/hrm/userApi";


interface UserQueryParams {
    status?: string;
    search?: string;
}
// export const useUserQuery = ({ status = "", search = "" }: UserQueryParams) =>
//     useInfiniteQuery({
//         queryKey: ["users",status, search],
//         queryFn: ({ pageParam = 1 }) => getUsers({ pageParam, status, search }),
//         getNextPageParam: (lastPage, pages) => {
//             if (lastPage?.pagination?.hasNext) {
//                 return lastPage?.pagination?.currentPage + 1;
//             }
//             return undefined;
//         },
//         initialPageParam: 1,
//         staleTime: 1000 * 60 * 10, // 10 minutes
//     });
export const useUserQuery = ({ status = "", search = "" }: UserQueryParams) => {
    const res = useInfiniteQuery({
        queryKey: ["users", status, search],
        queryFn: ({ pageParam = 1 }) => getUsers({ pageParam, status, search }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage?.pagination?.hasNext) {
                return lastPage?.pagination?.currentPage + 1;
            }
            return undefined;
        },
        initialPageParam: 1,
        staleTime: 1000 * 60 * 10, // 10 minutes
    });
    // Flatten the data from the response to an array of TeamMembers
    const data = res.data?.pages?.flatMap((page) => page.data) || [];

    return { ...res, data };
};

export const useUserDetailsQuery = (id: string) =>
    useQuery({
        queryKey: ["user", id],
        queryFn: () => getUserDetailsById(id),
        staleTime: 1000 * 60 * 10,
        enabled: !!id,
    });
