import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MelComponent } from './mel-page/mel/mel.component';
import { MelMenuComponent } from './mel-page/mel-menu/mel-menu.component';
import { MelPageComponent } from './mel-page/mel-page.component';





@NgModule({
  declarations: [
    MelComponent,
    MelMenuComponent,
    MelPageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MelPageComponent
  ]
})
export class MelModule { }
