import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventarioComponent } from './inventario/inventario.component';
import { KamitoComponent } from './kamito/kamito.component';
import { KumotoComponent } from './kumoto/kumoto.component';
import { LanComponent } from './lan/lan.component';
import { RaelleComponent } from './raelle/raelle.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'Rael', component:RaelleComponent},
  {path: 'Kamito', component:KamitoComponent},
  {path: 'Kumoto', component:KumotoComponent},
  {path: 'Lan', component:LanComponent},
  {path: 'Inventario', component:InventarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
