// teamTypes.ts

// Pagination data structure
export interface Pagination {
    totalItem: number;
    limit: number;
    currentPage: number;
    totalPages: number;
    pageCounter: number;
    hasPrev: boolean;
    hasNext: boolean;
    prev: string | null;
    next: string | null;
}

// Team data structure
export interface TeamMember {
    _id: string;
    teamName: string;
    teamMembers: string[];
    newAddMembers: string[];
    removeMembers: string[];
    createdBy: CreatedUpdatedBy;
    createdAt: string;
    updatedAt: string;
    __v: number;
    updatedBy: CreatedUpdatedBy;
    newAddMembersDetails: TeamMemberDetails[];
    removeMembersDetails: TeamMemberDetails[];
    manager: TeamMemberDetails[];
    teamLead: TeamMemberDetails[];
    agent: TeamMemberDetails[];
}

// Response data structure from the API
export interface TeamApiResponse {
    data: TeamMember[]; // array of team members
    pagination: Pagination;
}

// Params for getTeams API function
export interface GetTeamsParams {
    pageParam?: number;
    search?: string;
    userId?: string;
}


type TeamMemberDetails = {
    _id: string;
    name: string;
    lastName: string;
    email: string;
    organizationId: string;
    role: string;
    updatedAt: string;
};

type CreatedUpdatedBy = {
    name: string;
    role: string;
    id: string;
};
