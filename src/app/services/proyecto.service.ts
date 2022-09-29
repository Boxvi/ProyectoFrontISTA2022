import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Proyecto } from '../models/proyecto';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private urlEndPoint:string='http://localhost:8080/api/proyectos';
  private httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':'Bearer '+JSON.parse(sessionStorage['user']).accessToken })
  constructor(private http: HttpClient) { }

  getProyectos():Observable <Proyecto[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response=>response as Proyecto[]));
  }

  create(proyecto:Proyecto):Observable<Proyecto>{
      return this.http.post<Proyecto>(this.urlEndPoint,proyecto,{headers:this.httpHeaders})
  }

  getProyecto(id:Proyecto):Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.urlEndPoint}/${id}`);
  }
  editar(proyecto:Proyecto){
    const path =`${this.urlEndPoint}/${proyecto.idproyecto}` ;
    return this.http.put<Proyecto>(path,proyecto)
  }

  eliminar(proyecto:Proyecto){
    const path =`${this.urlEndPoint}/${proyecto.idproyecto}` ;
    return this.http.delete(path);
  }
  getRoken(){
    return localStorage.getItem('token')||'';
  }
}
