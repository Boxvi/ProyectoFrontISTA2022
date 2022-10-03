import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Roles } from '../models/roles';

@Injectable({
  providedIn: 'root'
})
export class RolservicesService {
  
  private urlEndPoint:string='http://localhost:8080/api/roles';
  private httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':'Bearer '+JSON.parse(sessionStorage['user']).accessToken })
  constructor(private http: HttpClient) { }

  getRoles():Observable <Roles[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response=>response as Roles[]))
  }

  create(roles:Roles):Observable<Roles>{
    return this.http.post<Roles>(this.urlEndPoint, roles, {headers:this.httpHeaders})
  }

  getRol(id:Roles):Observable<Roles>{
    return this.http.get<Roles>(`${this.urlEndPoint}/${id}`)
  }

  editar(roles:Roles):Observable<Roles>{
    console.log(roles)
    return this.http.put<Roles>(this.urlEndPoint+"/"+roles.idrol, roles, {headers:this.httpHeaders})
  }

  eliminar(roles:Roles){
    const path = `${this.urlEndPoint}/${roles.idrol}`;
    return this.http.delete<Roles>(this.urlEndPoint+"/"+roles.idrol, {headers:this.httpHeaders});
  }
}
