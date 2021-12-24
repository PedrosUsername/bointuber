import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HajimePageComponent } from './hajime-module/hajime-page/hajime-page.component';
import { IchikaPageComponent } from './ichika-module/ichika-page/ichika-page.component';
import { MelPageComponent } from './mel-module/mel-page/mel-page.component';
import { RushiaPageComponent } from './rushia-module/rushia-page/rushia-page.component';
import { SanaPageComponent } from './sana-module/sana-page/sana-page.component';

const routes: Routes = [
  { path: 'ichika', component: IchikaPageComponent },
  { path: 'hajime', component: HajimePageComponent },
  { path: 'mel', component: MelPageComponent },
  { path: 'sana', component: SanaPageComponent },
  { path: 'rushia', component: RushiaPageComponent },

  { path: '', redirectTo: '/ichika', pathMatch: 'full' },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
