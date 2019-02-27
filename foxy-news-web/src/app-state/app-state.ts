import {ReadOnlyNested} from '../util/read-only-nested.type';

export type Link = ReadOnlyNested<{
  id: string;
  title: string;
  summary: string;
  href: string;
  tag: string;
}>;

export type Newsletter = ReadOnlyNested<{
  id: string;
  title: string;
  summary: string;
  date: string;
  links: Link[];
}>

export type AppState = ReadOnlyNested<{
  authentication: {
    user?: string,
    authenticated: boolean
  },
  links: { [key: string]: Link },
  newsletters: {
    [key: string]: Newsletter
  },
  newsletterDraft?: Newsletter
}>;
