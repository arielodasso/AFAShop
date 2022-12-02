import { Component, OnInit } from '@angular/core';
import { Indumentarias } from './Indumentarias';
import { IndumentariasCarritoService } from '../indumentarias-carrito.service';

@Component({
  selector: 'app-indumentarias-list',
  templateUrl: './indumentarias-list.component.html',
  styleUrls: ['./indumentarias-list.component.scss']
})
export class IndumentariasListComponent implements OnInit {
[x: string]: any;

indumentarias: Indumentarias[] = [
  {
  producto: "Buzo",
  temporada: 2022,
  stock: 5,
  imagen: "assets/img/buzo.jpg"
},
{
  producto: "Buzo",
  temporada: 2022,
  stock: 5,
  imagen: "assets/img/buzo2.jpg"
},
{
  producto: "Campera",
  temporada: 2022,
  stock: 5,
  imagen: "assets/img/campera.jpg"
},
{
  producto: "Short",
  temporada: 2022,
  stock: 5,
  imagen: "assets/img/short.jpg"
}
]

constructor(private carrito: IndumentariasCarritoService) {
}

ngOnInit(): void {
}


agregarCarrito(indumentaria:Indumentarias):void{
 this.carrito.agregarCarrito(indumentaria);
 indumentaria.stock -= 1;
}

}
