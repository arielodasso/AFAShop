import { Component, OnInit } from '@angular/core';
import { IndumentariasCarritoService } from '../indumentarias-carrito.service';
import { Indumentarias } from '../indumentarias-list/Indumentarias';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-carrito-indumentaria',
  templateUrl: './carrito-indumentaria.component.html',
  styleUrls: ['./carrito-indumentaria.component.scss']
})
export class CarritoIndumentariaComponent implements OnInit {

  carritoLista: Indumentarias[] = [];

  constructor(private carrito: IndumentariasCarritoService) {
    carrito.carritoLista.subscribe((observable)=>this.carritoLista = observable);
   }

  ngOnInit(): void {
  }

}

