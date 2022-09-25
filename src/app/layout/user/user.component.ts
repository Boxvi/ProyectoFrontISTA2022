import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  panelOpenState = false;
  public persona:User=new User();
 //Maneja el estado de carga de esta pagina
 issloading=true;
 
 //Obtine el nombre completo de rol correspondiente
 
  constructor(private router:Router, private loginservice:LoginService)
   { }
   ngAfterViewInit(): void {
    setTimeout(()=>{
      this.issloading=false;
    },1000)
  }

  ngOnInit(): void {
    this.persona.rol="AMD"
    if(JSON.parse(localStorage['token'])!=""){
      
      //desencriptar token obtiene rol
      console.log('descrincpataaa token')
    }else{
      window.localStorage.clear();
      localStorage.removeItem("user");
      
      this.router.navigate(['/auth/bienvenido']).then(() => {
        window.location.reload();
      });
    }
  }

  logout():void{
    window.localStorage.clear();
    sessionStorage.clear;
    sessionStorage.removeItem('token')
    localStorage.removeItem("token");
    sessionStorage.setItem('token', JSON.stringify(""));
    this.router.navigate(['/auth/login']).then(() => {
      window.location.reload();
    });
  }
}
