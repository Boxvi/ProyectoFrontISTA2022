import { Component, OnInit } from '@angular/core';
import { Carrera } from '../../../models/carrera';
import { CarreraService } from '../../../services/carrera.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {

  Carreras: Carrera[]=[];
  public Carrera:Carrera = new Carrera();
  public titulo:string="Crear Carrera";
  constructor(private repuestoService:CarreraService,private router:Router,private activateRouter:ActivatedRoute) {

   }

    ngOnInit(): void {

      
      this.repuestoService.getCarreras().subscribe(
     
        Carreras => this.Carreras=Carreras

        
      );
  
      this.cargarRepuesto()
      
    }

    public create():void{
      this.repuestoService.create(this.Carrera).subscribe(
        response=> this.router.navigate(['/panelusuario/proyecto/crearcarrera'])
      )
      
    }

    public Editar():void{
      this.repuestoService.editar(this.Carrera).subscribe(
        response=> this.router.navigate(['/panelusuario/proyecto/crearcarrera'])
      )
    }

    public eliminar():void{
      this.repuestoService.eliminar(this.Carrera).subscribe(
        response=> this.router.navigate(['/panelusuario/proyecto/crearcarrera'])
      )
    }
    delete(Carreras:Carrera):void{
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Esta seguro de eliminar!',
        text: `A ${Carreras.nombre} `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
  
          //funcion eliminar
          this.repuestoService.eliminar(Carreras).subscribe(data =>{
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              `Cliente eliminado ${Carreras.nombre} `,
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
          this.repuestoService.getCarrera(id).subscribe((Carrera)=>this.Carrera=Carrera)
        }
      })
    }

    recargar():void{
      window.location.reload()
      Swal.fire('Carrera Guardada',`Repuesto ${this.Carrera.id_carrera} guardo con exito`,'success')
      console.log(this.Carrera)
    }

  

  displayStyle = "none";
  displayStyle1 = "none";
  displayStyle2 = "none";
  displayStyle3 = "none";
  displayStyle4 = "none";
  displayStyle5 = "none";

  OpenPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  OpenPopup1() {
    this.displayStyle1= "block";
  }
  closePopup1() {
    this.displayStyle1= "none";
  }
  OpenPopup2() {
    this.displayStyle2= "block";
  }
  closePopup2() {
    this.displayStyle2= "none";
  }
  OpenPopup3() {
    this.displayStyle3= "block";
  }
  closePopup3() {
    this.displayStyle3= "none";
  }
  OpenPopup4() {
    this.displayStyle4= "block";
  }
  closePopup4() {
    this.displayStyle4= "none";
  }
  OpenPopup5() {
    this.displayStyle5= "block";
  }
  closePopup5() {
    this.displayStyle5= "none";
  }
}
