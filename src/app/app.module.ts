import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RaelleComponent } from './raelle/raelle.component';
import { KumotoComponent } from './kumoto/kumoto.component';
import { LanComponent } from './lan/lan.component';
import { KamitoComponent } from './kamito/kamito.component';
import { InventarioComponent } from './inventario/inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RaelleComponent,
    KumotoComponent,
    LanComponent,
    KamitoComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
