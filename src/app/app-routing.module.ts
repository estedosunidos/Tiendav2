import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Tienda',
    loadChildren: () =>
      import('./Tienda/Tienda.module').then((m) => m.TiendaModule),
  },
  { path: '', redirectTo: 'Tienda', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
