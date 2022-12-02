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
  imagen: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/57fa4f61cc13476d9f4daeb500e1b519_9366/buzo-de-entrenamiento-argentina-tiro-23.jpg"
},
{
  producto: "Buzo",
  temporada: 2022,
  stock: 5,
  imagen: "https://media.tycsports.com/files/2022/08/11/463953/el-nuevo-buzo-de-entrenamiento-de-la-seleccion-argentina-para-qatar-2022_w416.webp"
},
{
  producto: "Campera",
  temporada: 2022,
  stock: 5,
  imagen: "https://pbs.twimg.com/media/FbVNpnEXEAIt1Nc?format=jpg&name=900x900"
},
{
  producto: "Short",
  temporada: 2022,
  stock: 5,
  imagen: "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/H/B/HB9216_0.jpg"
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
