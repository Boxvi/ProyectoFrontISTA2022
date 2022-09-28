import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../../services/login.service';
import { Credenciales } from 'src/app/models/credenciales';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  panelOpenState = false;
  public persona:Credenciales=new Credenciales();
 //Maneja el estado de carga de esta pagina
 issloading=true;
 public rol?:String="";
 //Obtine el nombre completo de rol correspondiente
 
  constructor(private router:Router, private loginservice:LoginService)
   { }
   ngAfterViewInit(): void {
    setTimeout(()=>{
      this.issloading=false;
    },1000)
  }

  ngOnInit(): void {
    if(JSON.parse(localStorage['token'])!=""){
      
      //datos de usuario rol username
      this.persona=JSON.parse(sessionStorage['user']);
//obtencion de rol de usuario
      this.rol=JSON.parse(sessionStorage['user']).authorities[0].authority
    }else{
      window.localStorage.clear();
      localStorage.removeItem("user");
      
      this.router.navigate(['/auth/bienvenido']).then(() => {
        window.location.reload();
      });
    }
  }

  logout():void{
    sessionStorage.clear;
    sessionStorage.removeItem('token')
    localStorage.removeItem("token");
    this.router.navigate(['/auth/login']).then(() => {
      window.location.reload();
    });
  }
}
