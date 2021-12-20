import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IchikaComponent } from './ichika/ichika.component';
import { SanaComponent } from './sana/sana.component';
import { RushiaComponent } from './rushia/rushia.component';
import { HajimeComponent } from './hajime/hajime.component';

@NgModule({
  declarations: [
    AppComponent,
    IchikaComponent,
    SanaComponent,
    RushiaComponent,
    HajimeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
