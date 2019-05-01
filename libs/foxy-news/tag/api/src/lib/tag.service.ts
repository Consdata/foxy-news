import { Observable } from 'rxjs';
import { Tag } from './tag';

export abstract class TagService {
  abstract tags(): Observable<Tag[]>;
}
