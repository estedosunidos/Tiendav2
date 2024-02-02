import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DireccionesComponent } from './Direcciones/Direcciones.component';
import { OrdenComponent } from './Orden/Orden.component';
import { PerfilComponent } from './Perfil/Perfil.component';
import { InicioComponent } from '../Inicio/Inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      { path: 'Direcciones', component: DireccionesComponent },
      { path: 'Order', component: OrdenComponent },
      { path: 'Perfil', component: PerfilComponent },

      {
        path: '**',
        redirectTo: 'Inicio',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
