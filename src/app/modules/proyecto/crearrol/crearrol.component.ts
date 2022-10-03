import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Roles } from 'src/app/models/roles';
import { RolservicesService } from 'src/app/services/rolservices.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crearrol',
  templateUrl: './crearrol.component.html',
  styleUrls: ['./crearrol.component.css']
})
export class CrearrolComponent implements OnInit {

  
  Roles: Roles[]=[];
  public Rol:Roles = new Roles();
  public titulo:string ="Crear rol";
  filterPost ='';
  constructor(
    private rolesService: RolservicesService, 
    private router:Router,
    private activateRouter:ActivatedRoute
   

    ) { }

  ngOnInit(): void {
   this.rolesService.getRoles().subscribe(
    Roles => this.Roles=Roles
   );

    this.cargarDatos();
  }

  public create():void{
    this.rolesService.create(this.Rol).subscribe(
      response=> this.router.navigate(['/panelusuario/proyecto/rol'])
    )
    
  }

  public Editar():void{
    console.log(this.Rol)
    this.rolesService.editar(this.Rol).subscribe(
      response=> this.router.navigate(['/panelusuario/proyecto/rol'])
    )
  }

  public eliminar():void{
    console.log(this.Rol)
    this.rolesService.eliminar(this.Rol).subscribe(
      response=> this.router.navigate(['/panelusuario/proyecto/rol'])
    )
  }

  delete(roles1:Roles):void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Esta seguro de eliminar!',
      text: `A ${roles1.nombre} ${roles1.descripcion}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        //funcion eliminar
        this.rolesService.eliminar(roles1).subscribe(data =>{
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            `Rol eliminado ${roles1.nombre} ${roles1.descripcion}`,
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

  cargarDatos():void{
    this.activateRouter.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.rolesService.getRol(id).subscribe((Rol)=> this.Rol=Rol)
      }
    })
  }



  recargar():void{
    window.location.reload()
    Swal.fire('Rol Guardada',`Rol ${this.Rol.idrol} guardo con exito`,'success')
    console.log(this.Rol)
  }




  displayStyle = "none";
  displayStyle2 = "none";
  displayStyle3 = "none";
  displayStyle4 = "none";
  

  openPopup() {
    this.Rol=new Roles;
    this.displayStyle = "block";
  }
  openPopup2(rol: Roles) {
    this.Rol=rol;
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
