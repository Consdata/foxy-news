export interface FieldMap {
  fieldByChannel: {
    [key: string]: 'tech' | 'biz';
  },
  channelByField: {
    tech: string;
    biz: string;
  },
  fieldByCallback: {
    [key: string]: 'tech' | 'biz';
  }
}
