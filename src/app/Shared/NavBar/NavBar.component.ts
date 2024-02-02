import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css']
})
export class NavBarComponent implements OnInit {
  public login2=[
    {
      label:'Inicio Seccion',
      icon:"user-icon",
      url:'Auth/login'
    },
  ]
 public navBar=[
  {
    label:'Inicio',
     url: '/'
  },
  {
    label:'Tienda',
    url:'Product/Index-Produc'
  },
  {
    label: 'Contactos',
    url:'Contacto'
  }
 ]

  constructor() { }

  ngOnInit() {
  }

}
