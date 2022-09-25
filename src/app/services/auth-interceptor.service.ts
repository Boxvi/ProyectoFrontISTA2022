import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private inject:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice=this.inject.get(LoginService);
    let jwtToken=req.clone({
      setHeaders:{
        Authorization: 'Bearer'+ authservice.getRoken()
      }
    });
    return next.handle(jwtToken);
  }
}
