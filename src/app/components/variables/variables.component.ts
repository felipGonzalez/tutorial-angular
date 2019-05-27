import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {

  public nombre:string = 'Felipe';
  public nota: number = 10;

  constructor() { }

  ngOnInit() {
  }

 
  public cambiarNombre() {
    this.nombre = 'Andres Felipe';
  }

}
