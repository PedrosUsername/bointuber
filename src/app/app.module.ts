import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IchikaModule } from './ichika-module/ichika.module';
import { HajimeModule } from './hajime-module/hajime.module';
import { SanaModule } from './sana-module/sana.module';
import { RushiaModule } from './rushia-module/rushia.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IchikaModule,
    HajimeModule,
    SanaModule,
    RushiaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
