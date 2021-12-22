import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IchikaComponent } from './ichika-page/ichika/ichika.component';
import { IchikaMenuComponent } from './ichika-page/ichika-menu/ichika-menu.component';
import { IchikaPageComponent } from './ichika-page/ichika-page.component';



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
  ]
})
export class IchikaModule { }
