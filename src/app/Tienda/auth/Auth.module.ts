import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './Auth.routing.module';
import { LoginComponent } from './pages/Login/Login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayaoutComponent } from './pages/layaout/layaout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../Shared/Shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    SharedModule, FormsModule,
    HttpClientModule,
  ],
  exports:[AuthRoutingModule,LayaoutComponent,LoginComponent,RegisterComponent],
  declarations: [LoginComponent,RegisterComponent,LayaoutComponent]
})
export class AuthModule { }
