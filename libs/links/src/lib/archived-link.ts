import {PendingLink} from '@foxy-news/links';

export interface ArchivedLink extends PendingLink {
  archivingReason: 'removed' | 'newsletter'
}
