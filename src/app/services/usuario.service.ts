import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  private urlEndPoint:string='http://localhost:8080/api/usuarios';
  private httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':'Bearer '+JSON.parse(sessionStorage['user']).accessToken })
  
  private _refresh$ =new Subject<void>();
  constructor(private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  getUsuarios():Observable <Usuario[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response=>response as Usuario[]));
  }

  create(usuarioa:Usuario):Observable<Usuario>{
      return this.http.post<Usuario>("http://localhost:8080/api/auth/signup/",usuarioa,{headers:this.httpHeaders}).pipe(
        tap(()=>{
          this._refresh$.next();
        })
      )
  }



  getUsuario(id:Usuario):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`);
  }

  editar(usuario:Usuario){
    return this.http.put<Usuario>(this.urlEndPoint+"/"+usuario.idusuario,usuario,{headers:this.httpHeaders}).pipe(
      tap(()=>{
        this.refresh$.next();
      })
    )
  }

  delet(usuario:Usuario){
    return this.http.delete(this.urlEndPoint+"/"+usuario.idusuario,{headers:this.httpHeaders}).pipe(
      tap(()=>{
        this._refresh$.next();
      })
    );
  }
}
