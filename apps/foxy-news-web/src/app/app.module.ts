import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoxyNewsShellModule } from '@foxy-news/foxy-news/shell';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    ...FoxyNewsShellModule.forRoot(environment),
    BrowserModule,
    BrowserAnimationsModule
  ],
  bootstrap: [FoxyNewsShellModule.bootstrap]
})
export class AppModule {}
