import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayaoutComponent } from './pages/layaout/layaout.component';
import { LoginComponent } from '../../Shared/Login/Login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'',
    component: LayaoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'Register',component:RegisterComponent},
      { path:'**',redirectTo:'login'}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
