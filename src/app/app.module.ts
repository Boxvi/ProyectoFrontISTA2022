import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagPrincComponent } from './pag-princ/pag-princ.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule,Routes } from '@angular/router';
import { RescontrasenaComponent } from './rescontrasena/rescontrasena.component';
import { VerificarcontrasenaComponent } from './verificarcontrasena/verificarcontrasena.component';
import { MensajeconfirmacionComponent } from './mensajeconfirmacion/mensajeconfirmacion.component';
import { VentanaadmiComponent } from './ventanaadmi/ventanaadmi.component';
import { ConfiguracionusuarioComponent } from './configuracionusuario/configuracionusuario.component';
import { CrearpersonaComponent } from './crearpersona/crearpersona.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CrudUsuarioComponent } from './crud-usuario/crud-usuario.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';



const routes: Routes=[
  {path:'',component:PagPrincComponent},
  {path:'login',component:LoginComponent},
  {path:'restablecer',component:RescontrasenaComponent},
  {path:'verificar',component:VerificarcontrasenaComponent},
  {path:'confirmacion',component:MensajeconfirmacionComponent},
  {path:'administradorpricipal',component:VentanaadmiComponent},
  {path:'confiusuario',component:ConfiguracionusuarioComponent},
  {path:'crearpersona',component:CrearpersonaComponent},
  {path:'admin',component:AdministradorComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'crudusuario',component:CrudUsuarioComponent},
  {path:'proyecto',component:ProyectoComponent},


  ];

@NgModule({
  declarations: [
    AppComponent,
    PagPrincComponent,
    LoginComponent,
    HeaderComponent,
    RescontrasenaComponent,
    VerificarcontrasenaComponent,
    MensajeconfirmacionComponent,
    VentanaadmiComponent,
    ConfiguracionusuarioComponent,
    CrearpersonaComponent,
    AdministradorComponent,
    UsuarioComponent,
    CrudUsuarioComponent,
    ProyectoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: JWT_OPTIONS, useValue: JWT_OPTIONS}, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
