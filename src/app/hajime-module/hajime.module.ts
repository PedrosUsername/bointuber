import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HajimeComponent } from './hajime-page/hajime/hajime.component';
import { HajimeMenuComponent } from './hajime-page/hajime-menu/hajime-menu.component';
import { HajimePageComponent } from './hajime-page/hajime-page.component';




@NgModule({
  declarations: [
    HajimeComponent,
    HajimeMenuComponent,
    HajimePageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HajimePageComponent
  ]
})
export class HajimeModule { }
