import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayStyle = "none";
  displayStyle1 = "none";
  displayStyle2 = "none";
  displayStyle3 = "none";
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
}
