export interface PendingVote {
    team: string;
    user: string;
    field: 'tech'|'biz';
    message: string;
}