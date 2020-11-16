import {PendingLink} from '@foxy-news/links';
import {Archivization} from './archivization';

export interface ArchivedLink extends PendingLink {
  archivization: Archivization;
}
