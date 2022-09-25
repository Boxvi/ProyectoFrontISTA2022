import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  Usuarios: Usuario[]=[];
  public Usuario:Usuario = new Usuario();
  public titulo:string="Crear Usuario";
  constructor(private repuestoService:UsuarioService,private router:Router,private activateRouter:ActivatedRoute) {}

  ngOnInit(): void {
    this.repuestoService.getUsuarios().subscribe(
      Usuarios => this.Usuarios=Usuarios
      
    );
    
    console.log(this.Usuarios);
    this.cargarRepuesto()
    
  }

  cargarRepuesto(): void{
    this.activateRouter.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.repuestoService.getUsuario(id).subscribe((Usuario)=>this.Usuario=Usuario)
      }
    })
  }





  displayStyle = "none";
  displayStyle2 = "none";
  displayStyle3 = "none";
  displayStyle4 = "none";
  

  
  openPopup() {
    this.displayStyle = "block";
  }
  openPopup2() {
    this.displayStyle2 = "block";
  }
  openPopup3() {
    this.displayStyle3 = "block";
  }
  openPopup4() {
    this.displayStyle4 = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  closePopup2() {
    this.displayStyle2 = "none";
  }
  closePopup3() {
    this.displayStyle3 = "none";
  }
  closePopup4() {
    this.displayStyle4 = "none";
  }
}
