import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  mostrar: boolean = false;
  element: boolean = false;


  Mostrarinfo() {
    this.mostrar = !this.mostrar
  }
  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }

}