import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint:string='http://deploybackend2022-env.eba-367yt4y5.us-east-1.elasticbeanstalk.com/api/usuarios';
  private httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json'})
  
  
  constructor(private http: HttpClient) { }

  getUsuarios():Observable <Usuario[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response=>response as Usuario[]));
  }

  create(usuario:Usuario):Observable<Usuario[]>{
      return this.http.post<Usuario[]>(this.urlEndPoint,usuario,{headers:this.httpHeaders})
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
