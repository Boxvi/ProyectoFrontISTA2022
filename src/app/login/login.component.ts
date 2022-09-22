import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Userlogin } from '../models/userlogin';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  issloading=true;
  erro="";
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
        500
        console.log(err);
        Swal.fire({
          title: 'Error',
          text: 'Credenciales incorrectas',
          icon: 'warning',
          color: "#FDFEFE",
          confirmButtonColor:"#0c3255",
          background: "#EBEE93 ",
        })
      }
      )

      


  }

}
