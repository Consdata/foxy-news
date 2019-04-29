import {Link} from '@foxy-news/link/api';
import {Observable} from 'rxjs';

export abstract class LinkService {

  abstract pendingLinks(): Observable<Link[]>;

  abstract rejectedLinks(): Observable<Link[]>;

  abstract publishedLinks(): Observable<Link[]>;

  abstract save(link: Link): Observable<Link>;

  abstract reject(link: Link);

}
