import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FxyAppShellModule } from '@foxy-news/fxy-app/shell';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    ...FxyAppShellModule.forRoot(environment),
    BrowserModule,
    BrowserAnimationsModule
  ],
  bootstrap: [FxyAppShellModule.bootstrap]
})
export class AppModule {}
