import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CookieService } from 'ngx-cookie-service';
import { RestpasswordComponent } from './restpassword/restpassword.component';


const routes: Routes=[
  {
    path:'bienvenida',component:BienvenidaComponent
  },{
    path: 'login', component: LoginComponent
  },{
    path: 'restablecercontra', component:RestpasswordComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    BienvenidaComponent,
    RestpasswordComponent
  ],
  exports:[RouterModule],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [CookieService],
})
export class AuthModule { }
