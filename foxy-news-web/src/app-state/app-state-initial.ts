import {AppState, Link, Newsletter} from './app-state';

const link = (id: string, tag = `security`): Link => ({
  id,
  title: `link-${id}`,
  summary: `summary-${id}`,
  href: `href-${id}`,
  tag: tag
});

const newsletter = (id: string): Newsletter => ({
  id,
  date: `date-${id}`,
  title: `title-${id}`,
  summary: `summary-${id}`,
  links: [
    link(`nl1-${id}`, `jvm`),
    link(`nl2-${id}`, `jvm`),
    link(`nl3-${id}`, `misc`),
    link(`nl4-${id}`),
    link(`nl5-${id}`),
    link(`nl6-${id}`),
  ]
});

export const AppStateInitial: AppState = {
  authentication: {
    authenticated: false,
    user: undefined
  },
  links: {
    'l1': link('l1'),
    'l2': link('l2'),
    'l3': link('l3'),
    'l4': link('l4'),
    'l5': link('l5'),
    'l6': link('l6'),
    'l7': link('l7'),
  },
  newsletters: {
    'n1': newsletter('n1'),
    'n2': newsletter('n2'),
    'n3': newsletter('n3'),
    'n4': newsletter('n4'),
    'n5': newsletter('n5'),
  }
};
