import { ProductModule } from './../Tienda/pages/product/Product.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Footer/Footer.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../Tienda/auth/Auth.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[FooterComponent,NavBarComponent],
  declarations: [FooterComponent,NavBarComponent]
})
export class SharedModule { }
