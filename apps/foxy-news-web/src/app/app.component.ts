import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'fxy-app',
  template: `
    <fxy-navbar></fxy-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: [
    'app.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(db: AngularFirestore) {
    console.log(db.createId());
  }

}
