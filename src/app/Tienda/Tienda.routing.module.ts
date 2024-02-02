import { LayaoutComponent } from '../Tienda/auth/pages/layaout/layaout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/Inicio/Inicio.component';
import { ContactoComponent } from './pages/Contacto/Contacto.component';
import { OrdenComponent } from './pages/usuarios/Orden/Orden.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      { path: 'Contacto', component: ContactoComponent },
      {
        path: 'Product',
        loadChildren: async () =>
          (await import('../Tienda/pages/product/Product.module'))
            .ProductModule,
      },
      {
        path: 'Usuario',
        loadChildren: async () =>
          (await import('../Tienda/pages/usuarios/Usuario.module'))
            .UsuarioModule,
      },

      { path: 'Auth',
      loadChildren: async () =>
      (await import('../Tienda/auth/Auth.module'))
        .AuthModule },
      {
        path: 'Orden',
        component: OrdenComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiendaRoutingModule {}
