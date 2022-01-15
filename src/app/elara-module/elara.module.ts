import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElaraComponent } from './elara-page/elara/elara.component';
import { ElaraMenuComponent } from './elara-page/elara-menu/elara-menu.component';
import { ElaraPageComponent } from './elara-page/elara-page.component';






@NgModule({
  declarations: [
    ElaraComponent,
    ElaraMenuComponent,
    ElaraPageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ElaraPageComponent
  ]
})
export class ElaraModule { }
