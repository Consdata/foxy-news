export interface Link {
    data: {
        category: string;
        description: string;
        link: string;
        summary: string;
        author: string;
    };
    field: 'tech'|'biz';
    message: {
        channel: string;
        timestamp: string;
    };
    team: string;
    userVotes: {
        [login: string]: boolean
    };
    votes: number;
}