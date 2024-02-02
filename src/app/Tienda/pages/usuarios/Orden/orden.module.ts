import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleOrdenComponent } from './detalle-orden/detalle-orden.component';
import { IndexOrdenComponent } from './index-orden/index-orden.component';
import { TiendaModule } from 'src/app/Tienda/Tienda.module';
import { SharedModule } from 'src/app/Shared/Shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, TiendaModule],
  exports: [DetalleOrdenComponent, IndexOrdenComponent],
  declarations: [DetalleOrdenComponent, IndexOrdenComponent],
})
export class OrdenModule {}
