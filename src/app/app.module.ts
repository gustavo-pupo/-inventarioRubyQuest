import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RaelleComponent } from './raelle/raelle.component';
import { KumotoComponent } from './kumoto/kumoto.component';
import { LanComponent } from './lan/lan.component';
import { KamitoComponent } from './kamito/kamito.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RaelleComponent,
    KumotoComponent,
    LanComponent,
    KamitoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
