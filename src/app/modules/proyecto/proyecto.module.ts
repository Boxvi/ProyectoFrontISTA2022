import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearpersonaComponent } from './crearpersona/crearpersona.component';
import { ConfiguracionusuarioComponent } from './configuracionusuario/configuracionusuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VentaAdminComponent } from './venta-admin/venta-admin.component';
import { VerificarpasswordComponent } from './verificarpassword/verificarpassword.component';
import { GuarUserdGuard } from '../auth/guar-userd.guard';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { MensajeconfirmacionComponent } from './mensajeconfirmacion/mensajeconfirmacion.component';
import { CarreraComponent } from './carrera/carrera.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { UsuarioPipe } from 'src/app/pipes/usuario.pipe';





const routers: Routes = [
  {path: 'administrador',component:AdminComponent, canActivate:[GuarUserdGuard]},
  {path: 'crearpersona',component:CrearpersonaComponent, canActivate:[GuarUserdGuard]},
  {path: 'configuracionusuario', component:ConfiguracionusuarioComponent, canActivate:[GuarUserdGuard]},
  {path: 'usuario', component:UsuarioComponent, canActivate:[GuarUserdGuard]},
  {path: 'ventaadmin',component:VentaAdminComponent, canActivate:[GuarUserdGuard]},
  {path: 'verificarpassword', component:VerificarpasswordComponent, canActivate:[GuarUserdGuard]},
  {path: 'proyecto', component:ProyectoComponent, canActivate:[GuarUserdGuard]},
  {path: 'mensajeconfirmacion', component: MensajeconfirmacionComponent, canActivate:[GuarUserdGuard]},
  {path: 'carrera',component: CarreraComponent, canActivate:[GuarUserdGuard]}
]

@NgModule({
  declarations: [
    AdminComponent,
    CrearpersonaComponent,
    ConfiguracionusuarioComponent,
    UsuarioComponent,
    VentaAdminComponent,
    VerificarpasswordComponent,
    ProyectoComponent,
    MensajeconfirmacionComponent,
    CarreraComponent,
    FilterPipe,
    UsuarioPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routers),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [RouterModule]
})


//intercepto inyector {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true}
export class ProyectoModule { }
