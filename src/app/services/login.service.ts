import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Userlogin } from '../models/userlogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlEndPoint:string='http://deploybackend2022-env.eba-367yt4y5.us-east-1.elasticbeanstalk.com/api/auth';

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  
  constructor(private http:HttpClient,  private jwtHelper: JwtHelperService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  Login(userRequest: Userlogin):Observable<Userlogin>{
    //console.log(userRequest.username, userrequest.password)
      return this.http.post<Userlogin>(this.urlEndPoint+"/login",userRequest)
  }
  

  isAuth():boolean{
    const token =localStorage.getItem('token');

    if(this.jwtHelper.isTokenExpired(token+"") || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }
}
