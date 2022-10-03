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
   filterPost ='';
  ngOnInit(): void {
    this.repuestoService.getProyectos().subscribe(
      
      Proyectos => {
        console.log(Proyectos);
        this.Proyectos=Proyectos}
      
    );

    this.cargarRepuesto()
    
  }

  public create():void{
    this.repuestoService.create(this.Proyecto).subscribe(
      response=> this.router.navigate(['/panelusuario/proyecto/crearproyecto'])
    )
    
  }

  public Editar():void{
    this.repuestoService.editar(this.Proyecto).subscribe(
      response=> this.router.navigate(['/panelusuario/proyecto/crearproyecto'])
    )
  }

  delete(Proyectos:Proyecto):void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Esta seguro de eliminar!',
      text: `A ${Proyectos.nombre} `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        //funcion eliminar
        this.repuestoService.eliminar(Proyectos).subscribe(data =>{
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            `Carrera eliminada ${Proyectos.nombre} `,
            'success'
          )
          
  
        })

        console.log('llega');
        window.location.reload()
                  console.log('pasoo');
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          ' ',
          'error'
        )
      }
    })   
   
  }



  cargarRepuesto(): void{
    this.activateRouter.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.repuestoService.getProyecto(id).subscribe((Proyecto)=>this.Proyecto=Proyecto)
      }
    })
  }

  recargar():void{
    window.location.reload()
    Swal.fire('Carrera Guardada',`Repuesto ${this.Proyecto.idproyecto} guardo con exito`,'success')
    console.log(this.Proyecto)
  }


}
