import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Tag} from '../tags/tag';
import {Link} from './link';
import {LinkDb} from './link-db';
import {LinkHref} from './link-href';
import {LinkState} from './link-state';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private readonly pending: AngularFirestoreCollection<LinkDb>;
  private readonly published: AngularFirestoreCollection<LinkDb>;
  private readonly rejected: AngularFirestoreCollection<LinkDb>;

  constructor(private readonly firestore: AngularFirestore) {
    this.pending = this.firestore.collection('/links/pending/list');
    this.published = this.firestore.collection('/links/published/list');
    this.rejected = this.firestore.collection('/links/rejected/list');
  }

  pendingLinks(): Observable<Link[]> {
    return LinkService.queryLinks(this.pending);
  }

  rejectedLinks(): Observable<Link[]> {
    return LinkService.queryLinks(this.rejected);
  }

  publishedLinks(): Observable<Link[]> {
    return LinkService.queryLinks(this.published);
  }

  save(link: Link): Observable<Link> {
    const toAdd = {
      ...link,
      id: link.id ? link.id : this.firestore.createId()
    };
    const dbModel = LinkService.asDb(toAdd);
    return from(this.pending.doc(toAdd.id).set(dbModel))
      .pipe(
        map(() => toAdd)
      );
  }

  reject(link: Link) {
    this.pending.doc(link.id).delete();
    this.rejected.doc(link.id).set(LinkService.asDb(link))
  }

  private static queryLinks(collection: AngularFirestoreCollection<LinkDb>) {
    return collection.snapshotChanges()
      .pipe(
        map(changes => changes.map(change => ({
          ...change.payload.doc.data(),
          id: change.payload.doc.id
        }))),
        map(linkDbs => linkDbs.map(linkDb => LinkService.asLink(linkDb))),
      );
  }

  private static asDb(link: Link): LinkDb {
    return {
      id: link.id,
      title: link.title,
      summary: link.summary,
      state: link.state,
      tags: link.tags.map(tag => tag.text),
      hrefs: link.hrefs.map(href => ({
        summary: href.summary,
        url: href.url
      }))
    };
  }

  private static asLink(linkDb: LinkDb): Link {
    return {
      id: linkDb.id,
      title: linkDb.title,
      summary: linkDb.summary,
      state: LinkState[linkDb.state],
      tags: linkDb.tags ? linkDb.tags.map(tag => new Tag({text: tag})) : [],
      hrefs: linkDb.hrefs ? linkDb.hrefs.map(href => new LinkHref({summary: href.summary, url: href.url})) : []
    };
  }

}
