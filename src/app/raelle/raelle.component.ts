import { Component } from '@angular/core';

@Component({
  selector: 'app-raelle',
  templateUrl: './raelle.component.html',
  styleUrls: ['./raelle.component.css']
})
export class RaelleComponent{

  constructor() { }

  vidaMax:number = 80
  vida:number = 80
  // larguraVida: number = (this.vida*100)/this.vidaMax
  xp:number = 1700
  xpMax:number = 5500

  


}
