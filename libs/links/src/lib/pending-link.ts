export interface PendingLink {
  id: string;
  field: string;
  data: {
    author: string;
    category: string;
    description: string;
    link: string;
    summary: string;
  };
  message: {
    channel: string;
    timestamp: string;
  };
  team: string;
  user: string;
  userVotes: {
    [login: string]: boolean
  };
  votes: number;
  newsletter: string | 'current';
}
