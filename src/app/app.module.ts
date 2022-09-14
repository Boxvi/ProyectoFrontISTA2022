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


const routes: Routes=[
  {path:'',component:PagPrincComponent},
  {path:'login',component:LoginComponent},
  {path:'restablecer',component:RescontrasenaComponent},
  {path:'verificar',component:VerificarcontrasenaComponent},
  {path:'confirmacion',component:MensajeconfirmacionComponent},
  {path:'administrador',component:VentanaadmiComponent},
  {path:'confiusuario',component:ConfiguracionusuarioComponent},
  {path:'crearpersona',component:CrearpersonaComponent}
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
    CrearpersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
