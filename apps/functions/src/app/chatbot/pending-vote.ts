export interface PendingVote {
  team: string;
  user: string;
  field: 'tech' | 'biz';
  message: string;
  link: string;
  ephemeral: {
    channelId: string,
    userId: string
  }
}
