import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FxyAppModule} from '@foxy-news/fxy-app';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    ...FxyAppModule.forRoot(environment),
    BrowserModule,
    BrowserAnimationsModule
  ],
  bootstrap: [FxyAppModule.bootstrap]
})
export class AppModule {
}
