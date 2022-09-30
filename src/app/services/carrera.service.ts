import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Carrera } from '../models/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  private urlEndPoint:string='http://localhost:8080/api/carreras';
  private httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':'Bearer '+JSON.parse(sessionStorage['user']).accessToken })
  constructor(private http: HttpClient) { }

  getCarreras():Observable <Carrera[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response=>response as Carrera[]));
  }

  create(carrera:Carrera):Observable<Carrera>{
      return this.http.post<Carrera>(this.urlEndPoint,carrera,{headers:this.httpHeaders})
  }


  getCarrera(id:Carrera):Observable<Carrera>{
    return this.http.get<Carrera>(`${this.urlEndPoint}/${id}`);
  }
  editar(carrera:Carrera){
    const path =`${this.urlEndPoint}/${carrera.id_carrera}` ;
    return this.http.put<Carrera>(path,carrera)
  }

  eliminar(carrera:Carrera){
    const path =`${this.urlEndPoint}/${carrera.id_carrera}` ;
    return this.http.delete(path);
  }
  getRoken(){
    return localStorage.getItem('token')||'';
  }

  
}
