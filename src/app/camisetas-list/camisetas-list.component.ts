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
  imagen: "https://www.afashop.com.ar/ccstore/v1/images/?source=/file/v3363863698249912481/products/HB9215_FC_eCom-0.jpg&height=475&width=475"
},
{
  producto: "Camiseta Alternativa 22",
  temporada: 2022,
  stock: 1,
  imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a37248da803e40d08f48af04010aae24_9366/Camiseta_Suplente_Seleccion_Argentina_Messi_1_Azul_IQ5463_01_laydown.jpg"
},
{
  producto: "Camiseta Entrenamiento",
  temporada: 2022,
  stock: 1,
  imagen: "https://media.tycsports.com/files/2022/08/02/460026/camiseta-prematch-argentina_w416.webp"
},
{
  producto: "Camiseta Titular 21",
  temporada: 2021,
  stock: 1,
  imagen: "https://latinafy.com/images/detailed/16/Men%C2%B4s_Selecci%C3%B3n_Argentina__Titular_Official_Soccer_Team_Shirt_Argentina_-_2020-21_Edition__Latest_Edition__1.png"
},
{
  producto: "Camiseta Titular 19",
  temporada: 2019,
  stock: 1,
  imagen: "https://static.dafiti.com.ar/p/adidas-7310-760694-1-product.jpg"
},
{
  producto: "Camiseta Alternativa 19",
  temporada: 2019,
  stock: 1,
  imagen: "https://essential.vtexassets.com/arquivos/ids/301166/266-0164_4.jpg?v=637094150887800000"
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
