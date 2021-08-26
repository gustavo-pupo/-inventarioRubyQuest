import { Injectable } from '@angular/core';
import { Atributo } from './atributos.model';

@Injectable({
  providedIn: 'root'
})
export class AtributosService {

  constructor() { }

  public getAtributos(){

  let atributos:Atributo[]
    atributos = [
    new Atributo('Vigor', 3),
    new Atributo('Conhecimento', 10),
    new Atributo('Fortuna', 5),
    new Atributo('Força', 4),
    new Atributo('Destreza', 6),
    new Atributo('Inteligência', 15),
    new Atributo('Fé', 9),
  ]

  
  return atributos 
  }
  public getAtributosAdd(){
  let atributosAdd:Atributo[]
  
  let vigorAdd!:number
  let conhecimentoAdd!:number
  let fortunaAdd!:number
  let forcaAdd!:number
  let destrezaAdd!:number
  let inteligenciaAdd!:number
  let feAdd!:number

  
    atributosAdd = [
    new Atributo('Vigor', vigorAdd),
    new Atributo('Conhecimento', conhecimentoAdd),
    new Atributo('Fortuna', fortunaAdd),
    new Atributo('Força', forcaAdd),
    new Atributo('Destreza', destrezaAdd),
    new Atributo('Inteligência', inteligenciaAdd),
    new Atributo('Fé', feAdd),
  ]
  return atributosAdd
  }
}

