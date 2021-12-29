import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmanoPageComponent } from './amano-module/amano-page/amano-page.component';
import { HajimePageComponent } from './hajime-module/hajime-page/hajime-page.component';
import { IchikaPageComponent } from './ichika-module/ichika-page/ichika-page.component';
import { MelPageComponent } from './mel-module/mel-page/mel-page.component';
import { RushiaPageComponent } from './rushia-module/rushia-page/rushia-page.component';
import { SanaPageComponent } from './sana-module/sana-page/sana-page.component';

const routes: Routes = [
  { path: 'ichika', component: IchikaPageComponent },
  { path: 'hajime', component: HajimePageComponent },
  { path: 'amano', component: AmanoPageComponent },
  { path: 'rushia', component: RushiaPageComponent },
  { path: 'mel', component: MelPageComponent },
  { path: 'sana', component: SanaPageComponent },

  { path: '', redirectTo: '/ichika', pathMatch: 'full' },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
