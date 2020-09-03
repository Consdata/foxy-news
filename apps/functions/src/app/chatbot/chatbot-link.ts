export interface ChatbotLink {
    team: string;
    user: string;
    field: 'tech'|'biz';
    data: {
        category: string;
        summary: string;
        link: string;
        description: string;
        author: string;
    }
}
