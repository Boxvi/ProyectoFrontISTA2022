import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { Userlogin } from '../models/userlogin';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  issloading=true;
  //Obtencion de datos de sesion
  public userRequest: Userlogin = new Userlogin();
  
  constructor(private router: Router,private LoginService:LoginService ) { }

  ngOnInit(): void {
  }

  loginAuth():void{

    this.LoginService.Login(this.userRequest).subscribe(
      (data:any) =>{ 
        sessionStorage.clear;
        localStorage.setItem('token', data.accessToken)
        this.router.navigate(['/admin'])
      },err=>{
        Swal.fire({
          title: 'Error',
          text: 'Credenciales incorrectas',
          icon: 'warning',
          color: "#0c3255",
          confirmButtonColor:"#0c3255",
          background: "#fbc02d",
        })
      }
      )

      


  }

  
}
