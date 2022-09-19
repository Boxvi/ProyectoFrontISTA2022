import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Userlogin } from '../models/userlogin';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlEndPoint:string='http://localhost:8080/api/auth';
 

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  
  constructor(private http:HttpClient,  private jwtHelper: JwtHelperService) { }

  Login(userRequest: Userlogin):Observable<Userlogin>{
    //console.log(userRequest.username, userrequest.password)
      return this.http.post<Userlogin>(this.urlEndPoint+"/login",userRequest)
  }
  Signup(userRequest: Userlogin):Observable<Userlogin>{
    //console.log(userRequest)
    return this.http.post<User>(this.urlEndPoint+"/signup",userRequest)
  }

  isAuth():boolean{
    const token =localStorage.getItem('token');

    if(this.jwtHelper.isTokenExpired(token+"") || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }
}
