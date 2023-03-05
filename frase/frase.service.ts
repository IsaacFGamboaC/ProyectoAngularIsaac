import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FraseService {

  constructor(private frase:HttpClient) { }


  ObtenerFrase(){
    const respuesta=this.frase.get("https://api.quotable.io/random")
    return respuesta
  }

}