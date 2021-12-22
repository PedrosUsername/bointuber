import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SanaComponent } from './sana/sana.component';
import { RushiaComponent } from './rushia/rushia.component';
import { IchikaModule } from './ichika-module/ichika.module';
import { HajimeModule } from './hajime-module/hajime.module';

@NgModule({
  declarations: [
    AppComponent,
    SanaComponent,
    RushiaComponent,
  ],
  imports: [
    BrowserModule,
    IchikaModule,
    HajimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
