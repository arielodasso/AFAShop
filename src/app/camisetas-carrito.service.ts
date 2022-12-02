import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Camisetas } from './camisetas-list/Camisetas';

@Injectable({
  providedIn: 'root'
})

export class CamisetasCarritoService {

  private _carritoLista: Camisetas []=[];

  carritoLista: BehaviorSubject<Camisetas[]> = new BehaviorSubject(this._carritoLista);

  constructor() { }


  agregarCarrito(camiseta:Camisetas){
    let item: Camisetas| undefined = this._carritoLista.find((v1)=> v1.producto== camiseta.producto);
    if(!item){
      this._carritoLista.push(camiseta);
    }
    console.log(this._carritoLista);
    this.carritoLista.next(this._carritoLista);
  }

}
