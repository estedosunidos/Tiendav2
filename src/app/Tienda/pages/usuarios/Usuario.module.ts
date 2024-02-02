import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './Usuario.routing.module';
import { DireccionesComponent } from './Direcciones/Direcciones.component';
import { SidevarComponent } from './Sidevar/Sidevar.component';
import { PerfilComponent } from './Perfil/Perfil.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/Shared/Shared.module';
import { TiendaModule } from '../../Tienda.module';
import { OrdenComponent } from './Orden/Orden.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, TiendaModule],
  exports: [
    UsuarioRoutingModule,
    DireccionesComponent,
    SidevarComponent,
    PerfilComponent,
  ],
  declarations: [
    DireccionesComponent,
    OrdenComponent,
    SidevarComponent,
    PerfilComponent,
  ],
})
export class UsuarioModule {}
