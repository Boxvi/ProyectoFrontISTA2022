import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { AuthUser } from '../models/authuser';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint:string='http://localhost:8080/api/usuarios';
  private httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':'Bearer '+JSON.parse(sessionStorage['user']).accessToken })
  
  
  constructor(private http: HttpClient) { }

  getUsuarios():Observable <Usuario[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response=>response as Usuario[]));
  }

  create(usuarioa:AuthUser):Observable<AuthUser>{
      return this.http.post<AuthUser>(this.urlEndPoint,usuarioa,{headers:this.httpHeaders})
  }

  getUsuario(id:Usuario):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`);
  }
  editar(usuario:Usuario){
    const path =`${this.urlEndPoint}/${usuario.idusuario}` ;
    return this.http.put<Usuario>(path,usuario)
  }

  eliminar(usuario:Usuario){
    const path =`${this.urlEndPoint}/${usuario.idusuario}` ;
    return this.http.delete(path);
  }
}
