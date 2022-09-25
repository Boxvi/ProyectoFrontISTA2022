import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './layout/user/user.component';





const routes: Routes=[
  {path:'',redirectTo:'/auth/bienvenida',pathMatch:'full'},
  {path:'auth',loadChildren:()=>import('./modules/auth/auth.module').then((m)=>m.AuthModule)},
  
  {path:'panelusuario',component:UserComponent,children:[
    {path:'proyecto',loadChildren:()=>import('./modules/proyecto/proyecto.module').then((m)=>m.ProyectoModule)}]},
  

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
