import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Indumentarias } from './indumentarias-list/Indumentarias';

@Injectable({
  providedIn: 'root'
})
export class IndumentariasCarritoService {

  private _carritoLista: Indumentarias []=[];

  carritoLista: BehaviorSubject<Indumentarias[]> = new BehaviorSubject(this._carritoLista);

  constructor() { }


  agregarCarrito(indumentaria:Indumentarias){
    this._carritoLista.push(indumentaria);
    console.log(this._carritoLista);
    this.carritoLista.next(this._carritoLista);
  }
}
