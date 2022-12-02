import { Component, OnInit } from '@angular/core';
import { CamisetasCarritoService } from '../camisetas-carrito.service';
import { Camisetas } from '../camisetas-list/Camisetas';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})

export class CarritoComponent implements OnInit {

  carritoLista: Camisetas[] = [];

  constructor(private carrito: CamisetasCarritoService) {
    carrito.carritoLista.subscribe((observable)=>this.carritoLista = observable);
   }


  ngOnInit(): void {
  }

}
