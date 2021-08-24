import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RaelleComponent } from './raelle/raelle.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'Rael', component:RaelleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
