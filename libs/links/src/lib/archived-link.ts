import {PendingLink} from '@foxy-news/links';

export interface ArchivedLink extends PendingLink {
  archiveReason: 'removed' | 'newsletter'
}
