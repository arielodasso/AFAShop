import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopAboutComponent  } from './shop-about/shop-about.component';
import { ProductsListComponent } from './products-list/product-list.component';
import { CamisetasListComponent } from './camisetas-list/camisetas-list.component';
import { IndumentariasListComponent } from './indumentarias-list/indumentarias-list.component';
import { EntradasListComponent } from './entradas-list/entradas-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ProductsListComponent
  },
  {
    path: 'about',
    component: ShopAboutComponent
  },
  {
    path: 'camisetas',
    component: CamisetasListComponent
  },
  {
    path: 'indumentarias',
    component: IndumentariasListComponent
  },
  {
    path: 'tickets',
    component: EntradasListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
