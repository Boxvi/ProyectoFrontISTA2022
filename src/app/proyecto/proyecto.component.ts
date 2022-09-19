import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayNuevo = "none";
  displayStyle2 = "none";
  displayEliminar = "none";
  displayGuardar = "none";
  displayStyle5 = "none";
  displayStyle6 = "none";
  displayStyle7 = "none";

  
  openPopupNuevo() {
    this.displayNuevo = "block";
  }
  openPopup2() {
    this.displayStyle2 = "block";
  }
  openPopup3() {
    this.displayEliminar = "block";
  }
  openPopupGuardar() {
    this.displayGuardar = "block";
  }
  openPopup5() {
    this.displayStyle5 = "block";
  }
  openPopup6() {
    this.displayStyle6 = "block";
  }
  openPopup7() {
    this.displayStyle7 = "block";
  }

  closePopupNuevo() {
    this.displayNuevo = "none";
  }
  closePopup2() {
    this.displayStyle2 = "none";
  }
  closePopup3() {
    this.displayEliminar = "none";
  }
  closePopupGuardar() {
    this.displayGuardar = "none";
  }
  closePopup5() {
    this.displayStyle5 = "none";
  }
  closePopup6() {
    this.displayStyle6 = "none";
  }
  closePopup7() {
    this.displayStyle7 = "none";
  }
}
