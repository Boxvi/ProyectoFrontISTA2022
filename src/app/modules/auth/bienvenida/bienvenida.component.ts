import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  direction():void{
    this.router.navigate(['/panelusuario/proyecto/login']).then(()=>{
      window.location.reload();
    })
  }
}
