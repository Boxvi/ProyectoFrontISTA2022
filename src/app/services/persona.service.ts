import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlEndPoint:string='http://localhost:8080/api/personas';
  private httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':'Bearer '+JSON.parse(sessionStorage['user']).accessToken })
  constructor(private http: HttpClient) { }

  getPersonas():Observable <Persona[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response=>response as Persona[]));
  }

  create(persona:Persona):Observable<Persona>{
      return this.http.post<Persona>(this.urlEndPoint,persona,{headers:this.httpHeaders})
  }

  getPersona(id:Persona):Observable<Persona>{
    return this.http.get<Persona>(`${this.urlEndPoint}/${id}`);
  }
  editar(persona:Persona){
    const path =`${this.urlEndPoint}/${persona.idpersona}` ;
    return this.http.put<Persona>(path,persona)
  }

  eliminar(persona:Persona){
    const path =`${this.urlEndPoint}/${persona.idpersona}` ;
    return this.http.delete(path);
  }
  getRoken(){
    return localStorage.getItem('token')||'';
  }
}
