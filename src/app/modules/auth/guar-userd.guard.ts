import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { LoginService } from "../../services/login.service";

@Injectable({
  providedIn: "root",
})
export class GuarUserdGuard implements CanActivate {
  user: String = "";
  constructor(private router: Router, private service:LoginService) {}

  canActivate() {
      if(this.service.IsloggedIn()){
        return true;
      }else{
        this.router.navigate([''])
    return false;
      }
  }
}
