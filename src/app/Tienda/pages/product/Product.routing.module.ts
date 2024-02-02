import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexProductoComponent } from './Index-Producto/Index-Producto.component';
import { ShowProductosComponent } from './Show-productos/Show-productos.component';

const routes: Routes = [
  {
    path:'',
    component: IndexProductoComponent,
    children: [
      { path: 'Index-Product', component: IndexProductoComponent },
      {
        path: 'Show-product',component:ShowProductosComponent
      },
      {
        path:'**',redirectTo:'Index-Product'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
