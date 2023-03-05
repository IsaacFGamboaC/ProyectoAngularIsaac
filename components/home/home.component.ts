import { Component } from '@angular/core';
import { FraseService } from 'frase/frase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  informacionrecibida: any
  constructor(private variableServicio: FraseService) {
    variableServicio.ObtenerFrase().subscribe((data) => {
      this.informacionrecibida = data
    })
  }

  refrescarchiste(){
    this.variableServicio.ObtenerFrase().subscribe((data) => {
      this.informacionrecibida = data
    })
  
  }


}

