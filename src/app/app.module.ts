import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IchikaModule } from './ichika-module/ichika.module';
import { HajimeModule } from './hajime-module/hajime.module';
import { SanaModule } from './sana-module/sana.module';
import { RushiaModule } from './rushia-module/rushia.module';
import { MelModule } from './mel-module/mel.module';
import { AppRoutingModule } from './app-routing.module';
import { BridgeService } from './shared/bridge.service';
import { AmanoModule } from './amano-module/amano.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { ElaraModule } from './elara-module/elara.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IchikaModule,
    HajimeModule,
    SanaModule,
    RushiaModule,
    MelModule,
    AmanoModule,
    ElaraModule
  ],
  providers: [
    BridgeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
