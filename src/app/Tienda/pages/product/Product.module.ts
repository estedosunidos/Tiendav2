import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './Product.routing.module';
import { IndexProductoComponent } from './Index-Producto/Index-Producto.component';
import { ShowProductosComponent } from './Show-productos/Show-productos.component';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/Shared/Shared.module';
import { TiendaModule } from '../../Tienda.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,SharedModule
  ],
  exports:[ProductRoutingModule,IndexProductoComponent,ShowProductosComponent],
  declarations: [IndexProductoComponent,ShowProductosComponent]
})
export class ProductModule { }
