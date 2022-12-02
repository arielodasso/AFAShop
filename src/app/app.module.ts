import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/product-list.component';

import { FormsModule } from '@angular/forms';
import { ShopAboutComponent } from './shop-about/shop-about.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';

import {HttpClientModule} from '@angular/common/http';
import { CamisetasListComponent } from './camisetas-list/camisetas-list.component';
import { IndumentariasListComponent } from './indumentarias-list/indumentarias-list.component';
import { EntradasListComponent } from './entradas-list/entradas-list.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CarritoIndumentariaComponent } from './carrito-indumentaria/carrito-indumentaria.component';

@NgModule({
    declarations: [
        AppComponent,
        ShopAboutComponent,
        ShopProductsComponent,
        CamisetasListComponent,
        ProductsListComponent,
        IndumentariasListComponent,
        EntradasListComponent,
        CarritoComponent,
        CarritoIndumentariaComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ]
})
export class AppModule { }
