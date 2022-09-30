import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { respose, Userlogin } from '../models/userlogin';
import { Observable } from 'rxjs';
import { Credenciales } from '../models/credenciales';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlEndPoint:string='http://localhost:8080/api/auth';

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  
  constructor(private http:HttpClient,  private jwtHelper: JwtHelperService) { }
 

  Login(userRequest: Userlogin):Observable<Credenciales>{
    //console.log(userRequest.username, userrequest.password)
      return this.http.post<Credenciales>(this.urlEndPoint+"/login",userRequest);
  }
  

IsloggedIn(){
  
  return localStorage.getItem('token')!=null;
}

getRoken(){
  return localStorage.getItem('token')||'';
}

HaveAcces(){
  var loggintoke=localStorage.getItem('token')||'';
  var extract=loggintoke.split('.')[1];
  var data=atob(extract);
  var finaldata=JSON.parse(data);
  console.log(finaldata);

}

}

