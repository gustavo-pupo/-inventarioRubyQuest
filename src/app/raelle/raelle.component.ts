import { Component, OnInit } from '@angular/core';
import { Atributo } from '../atributos.model';
import { AtributosService } from '../atributos.service';
@Component({
  selector: 'app-raelle',
  templateUrl: './raelle.component.html',
  styleUrls: ['./raelle.component.css']
})
export class RaelleComponent implements OnInit{

  constructor(private atributoService:AtributosService) { }

  vidaMax:number = 80
  vida:number = 80
  // larguraVida: number = (this.vida*100)/this.vidaMax
  xp:number = 1700
  xpMax:number = 5500

  danoBase:number = 45

  atributos!:Atributo[];
  atributosAdd!:Atributo[];
  vigorAdd:number = 1
  conhecimentoAdd:number = 0
  fortunaAdd:number = 0
  forcaAdd:number = 0 
  destrezaAdd:number = 0
  inteligenciaAdd:number = 1
  feAdd:number = 4

  obterAtributos(){
    this.atributos = this.atributoService.getAtributos()
  }
  obterAtributosAdd(){
    this.atributosAdd = this.atributoService.getAtributosAdd()
  }
  pegaTudo(){
    this.obterAtributos()
    this.obterAtributosAdd()
  }
  
  ngOnInit(): void{
  this.pegaTudo()
}


}
