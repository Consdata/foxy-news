export interface FieldMap {
    fieldByChannel: {
        [key: string]: 'tech'|'biz';
    },
    channelByField: {
        tech: string;
        biz: string;
    },
}