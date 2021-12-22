import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanaPageComponent } from './sana-page/sana-page.component';
import { SanaComponent } from './sana-page/sana/sana.component';
import { SanaMenuComponent } from './sana-page/sana-menu/sana-menu.component';



@NgModule({
  declarations: [
    SanaComponent,
    SanaMenuComponent,
    SanaPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SanaPageComponent
  ]
})
export class SanaModule { }
