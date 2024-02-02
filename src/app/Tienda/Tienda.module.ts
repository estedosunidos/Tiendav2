import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaRoutingModule } from './Tienda.routing.module';
import { ContactoComponent } from './pages/Contacto/Contacto.component';
import { InicioComponent } from './pages/Inicio/Inicio.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../Shared/Shared.module';
import { CardComponent } from './components/card/card.component';
import { TitleComponent } from './components/Title/Title.component';
import { ProductRoutingModule } from './pages/product/Product.routing.module';
import { UsuarioRoutingModule } from './pages/usuarios/Usuario.routing.module';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [
    ContactoComponent,
    InicioComponent,
    CardComponent,
    TitleComponent,
    TiendaRoutingModule,
    ProductRoutingModule,
    UsuarioRoutingModule
  ],
  declarations: [
    ContactoComponent,
    InicioComponent,
    CardComponent,
    TitleComponent,
  ],
})
export class TiendaModule {}
