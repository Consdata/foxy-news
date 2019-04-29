export interface LinkDb {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  hrefs: { summary: string, url: string }[];
  state: string;
}
