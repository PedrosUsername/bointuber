import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RushiaPageComponent } from './rushia-page/rushia-page.component';
import { RushiaComponent } from './rushia-page/rushia/rushia.component';
import { RushiaMenuComponent } from './rushia-page/rushia-menu/rushia-menu.component';



@NgModule({
  declarations: [
    RushiaComponent,
    RushiaMenuComponent,
    RushiaPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RushiaPageComponent
  ]
})
export class RushiaModule { }
