import { Component, OnDestroy, OnInit } from "@angular/core";
import { Usuario } from "../../../models/usuario";
import { UsuarioService } from "../../../services/usuario.service";
import { Router, ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";
import { Subscription } from "rxjs";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.css"],
})
export class UsuarioComponent implements OnInit, OnDestroy {
  Usuarios: Usuario[] = [];
  Usuario: Usuario = new Usuario();
  rola?: Boolean;
  role?: Boolean;
  rolm?: Boolean;
  rolc?: Boolean;
  public titulo: string = "Crear Usuario";
  suscription!: Subscription;
  constructor(
    private usuarioservice: UsuarioService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {}

  searchUser ='';
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  ngOnInit(): void {
    this.usuarioservice
        .getUsuarios()
        .subscribe((Usuarios) => (this.Usuarios = Usuarios));
    this.suscription = this.usuarioservice.refresh$.subscribe(() => {
      this.usuarioservice
        .getUsuarios()
        .subscribe((Usuarios) => (this.Usuarios = Usuarios));
    });
  }

  obtenerrol(): String {
    let administrador: String = "";
    let evaluador: String = "";
    let monitor: String = "";
    let colaborador: String = "";
    if (
      this.rola == true ||
      this.role == true ||
      this.rolm == true ||
      this.rolc == true
    ) {
      if (this.rola == true) {
        administrador = "ROLE_ADMINISTRADOR";
      }
      if (this.role == true) {
        evaluador = "ROLE_EVALUADOR";
      }
      if (this.rolm == true) {
        monitor = "ROLE_MONITOR";
      }
      if (this.rolc == true) {
        colaborador = "ROLE_COLABORADOR";
      }
      console.log("bieeeeeen");

      this.Usuario.roles = [administrador, evaluador, monitor, colaborador];

      return "bien";
    } else {
      return "mal";
    }
  }

  llenarRol() {
    this.rola = false;
    this.role = false;
    this.rolm = false;
    this.rolc = false;
    if (
      this.Usuario.roles[0] == "ROLE_ADMINISTRADOR" ||
      this.Usuario.roles[1] == "ROLE_ADMINISTRADOR" ||
      this.Usuario.roles[2] == "ROLE_ADMINISTRADOR" ||
      this.Usuario.roles[3] == "ROLE_ADMINISTRADOR"
    ) {
      this.rola = true;
    }
    if (
      this.Usuario.roles[0] == "ROLE_EVALUADOR" ||
      this.Usuario.roles[1] == "ROLE_EVALUADOR" ||
      this.Usuario.roles[2] == "ROLE_EVALUADOR" ||
      this.Usuario.roles[3] == "ROLE_EVALUADOR"
    ) {
      this.role = true;
    }
    if (
      this.Usuario.roles[0] == "ROLE_MONITOR" ||
      this.Usuario.roles[1] == "ROLE_MONITOR" ||
      this.Usuario.roles[2] == "ROLE_MONITOR" ||
      this.Usuario.roles[3] == "ROLE_MONITOR"
    ) {
      this.rolm = true;
    }
    if (
      this.Usuario.roles[0] == "ROLE_COLABORADOR" ||
      this.Usuario.roles[1] == "ROLE_COLABORADOR" ||
      this.Usuario.roles[2] == "ROLE_COLABORADOR" ||
      this.Usuario.roles[3] == "ROLE_COLABORADOR"
    ) {
      this.rolc = true;
    }
    this.Usuario.roles;
  }

  createU(usuario: Usuario): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Esta seguro de Guardar!",
        text: `A ${this.Usuario.cedula} ${usuario.username}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (this.obtenerrol() == "bien") {
          if (result.isConfirmed) {
            this.usuarioservice.create(this.Usuario).subscribe((response) => {
              console.log(this.Usuario);
              swalWithBootstrapButtons.fire(
                "Guardado!",
                `Usuarioa Guardado ${usuario.cedula} ${usuario.username}`,
                "success"
              );
              
              
            });
            this.closePopup2();
              this.closePopup4()
              this.closePopup2();


          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire("Cancelado", " ", "error");
          }
        } else {
          Swal.fire(
            "Es necesario almenos un rol",
            ` para el usuario ${this.Usuario.username} `,
            "error"
          );
        }
      });
  }

  Editar(usuario: Usuario): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Esta seguro de Guardar!",
        text: `A ${this.Usuario.cedula} ${usuario.username}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (this.obtenerrol() == "bien") {
          console.log(this.Usuario);
          if (result.isConfirmed) {
            this.usuarioservice.editar(this.Usuario).subscribe((response) => {
              swalWithBootstrapButtons.fire(
                "Guardado!",
                `Usuarioa Guardado ${usuario.cedula} ${usuario.username}`,
                "success"
              );
            });
            this.closePopup2();
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire("Cancelado", " ", "error");
          }
        } else {
          Swal.fire(
            "Es necesario almenos un rol",
            ` para el usuario ${this.Usuario.username} `,
            "error"
          );
        }
      });
  }

  delete(usuario: Usuario): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Esta seguro de eliminar!",
        text: `A ${usuario.cedula} ${usuario.username}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          //funcion eliminar
          this.usuarioservice.delet(usuario).subscribe((data) => {
          });

         swalWithBootstrapButtons.fire(
              "Eliminado!",
              `Cliente eliminado ${usuario.cedula} ${usuario.username}`,
              "success"
            );
            this.ngOnInit();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire("Cancelado", " ", "error");
        }
      });
  }

  

  displayStyle = "none";
  displayStyle2 = "none";
  displayStyle3 = "none";
  displayStyle4 = "none";

  openPopup() {
    this.Usuario = new Usuario();
    this.displayStyle = "block";
  }
  openPopup2(editusuario: Usuario) {
    this.Usuario = editusuario;
    this.llenarRol();
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
