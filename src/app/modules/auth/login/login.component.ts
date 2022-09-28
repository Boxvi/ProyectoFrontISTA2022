import { Component, Inject, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { Userlogin, respose } from "../../../models/userlogin";
import { Router } from "@angular/router";
import { LoginService } from "../../../services/login.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  issloading = true;
  erro = "";
  //Obtencion de datos de sesion
  public userRequest: Userlogin = new Userlogin();

  constructor(
    private router: Router,
    private LoginService: LoginService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {}

  loginAuth(): void {
    sessionStorage.clear;

    this.LoginService.Login(this.userRequest).subscribe(
      data => {
        sessionStorage.clear;
        sessionStorage.setItem('user', JSON.stringify(data));
          localStorage.setItem("token", JSON.stringify(data));
          this.router
            .navigate(["/panelusuario/proyecto/administrador"])
            .then(() => {
              
            });
        
      },
      (err) => {
        500;
        console.log(err);
        Swal.fire({
          title: "Error",
          text: "Credenciales incorrectas",
          icon: "warning",
          color: "#FDFEFE",
          confirmButtonColor: "#0c3255",
          background: "#EBEE93 ",
        });
      }
    );
  }
}
