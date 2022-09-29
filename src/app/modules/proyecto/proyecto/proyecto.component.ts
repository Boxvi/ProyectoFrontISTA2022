import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../models/proyecto';
import { ProyectoService } from '../../../services/proyecto.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  Proyectos: Proyecto[]=[];
  public Proyecto:Proyecto = new Proyecto();
  public titulo:string="Crear Proyecto";
  constructor(private repuestoService:ProyectoService,private router:Router,private activateRouter:ActivatedRoute) {

   }
   cargarRepuesto(): void{
    this.activateRouter.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.repuestoService.getProyecto(id).subscribe((Proyecto)=>this.Proyecto=Proyecto)
      }
    })
  }
  ngOnInit(): void {
    this.repuestoService.getProyectos().subscribe(
      Proyectos => this.Proyectos=Proyectos
    );

    this.cargarRepuesto()
    
  }

  public create():void{
    this.repuestoService.create(this.Proyecto).subscribe(
      response=> this.router.navigate(['/crearproyecto'])
    )
    
  }

  public Editar():void{
    this.repuestoService.editar(this.Proyecto).subscribe(
      response=> this.router.navigate(['/crearproyecto'])
    )
  }

  public eliminar():void{
    this.repuestoService.eliminar(this.Proyecto).subscribe(
      response=> this.router.navigate(['/crearproyecto'])
    )
    Swal.fire('PRoyecto Eliminado',`Proyecto ${this.Proyecto.idproyecto} guardo con exito`,'success')
    console.log(this.Proyecto)
  }


}
