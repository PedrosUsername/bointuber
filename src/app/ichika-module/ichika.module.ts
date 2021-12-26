import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IchikaComponent } from './ichika-page/ichika/ichika.component';
import { IchikaMenuComponent } from './ichika-page/ichika-menu/ichika-menu.component';
import { IchikaPageComponent } from './ichika-page/ichika-page.component';
import { BridgeService } from '../shared/bridge.service';



@NgModule({
  declarations: [
    IchikaComponent,
    IchikaMenuComponent,
    IchikaPageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IchikaPageComponent
  ],
  providers: [
    BridgeService
   ],
  
})
export class IchikaModule { }
