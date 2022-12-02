import { Component, OnInit } from '@angular/core';
import { Camisetas } from './Camisetas';
import {CamisetasCarritoService} from '../camisetas-carrito.service';

@Component({
  selector: 'app-camisetas-list',
  templateUrl: './camisetas-list.component.html',
  styleUrls: ['./camisetas-list.component.scss']
})
export class CamisetasListComponent implements OnInit {
[x: string]: any;

camisetas: Camisetas[] = [
  {
  producto: "Camiseta Titular 22",
  temporada: 2022,
  stock: 1,
  imagen: "assets/img/camisetatitular.jpg"
},
{
  producto: "Camiseta Alternativa 22",
  temporada: 2022,
  stock: 1,
  imagen: "assets/img/camisetaalternativa.jpg"
},
{
  producto: "Camiseta Entrenamiento",
  temporada: 2022,
  stock: 1,
  imagen: "assets/img/entrenamiento.jpg"
},
{
  producto: "Camiseta Titular 21",
  temporada: 2021,
  stock: 1,
  imagen: "assets/img/titular2020.jpg"
},
{
  producto: "Camiseta Titular 19",
  temporada: 2019,
  stock: 1,
  imagen: "assets/img/titular2019.jpg"
},
{
  producto: "Camiseta Alternativa 19",
  temporada: 2019,
  stock: 1,
  imagen: "assets/img/alternativa2019.jpg"
}
]


  constructor(private carrito: CamisetasCarritoService) {
   }

  ngOnInit(): void {
  }


  agregarCarrito(camiseta:Camisetas):void{
    this.carrito.agregarCarrito(camiseta);
    camiseta.stock -= 1;
  }

}
