import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RushiaComponent } from './rushia/rushia.component';
import { IchikaModule } from './ichika-module/ichika.module';
import { HajimeModule } from './hajime-module/hajime.module';
import { SanaModule } from './sana-module/sana.module';

@NgModule({
  declarations: [
    AppComponent,
    RushiaComponent,
  ],
  imports: [
    BrowserModule,
    IchikaModule,
    HajimeModule,
    SanaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
