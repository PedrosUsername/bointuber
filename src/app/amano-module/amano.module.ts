import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmanoComponent } from './amano-page/amano/amano.component';
import { AmanoMenuComponent } from './amano-page/amano-menu/amano-menu.component';
import { AmanoPageComponent } from './amano-page/amano-page.component';




@NgModule({
  declarations: [
    AmanoComponent,
    AmanoMenuComponent,
    AmanoPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AmanoPageComponent
  ]
})
export class AmanoModule { }
