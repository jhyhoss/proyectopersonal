import { Component } from '@angular/core';

import { MaterialModule } from '../../material/material.module';

import { LoginComponent } from '../../login/login.component';


import { MatDialog } from '@angular/material/dialog'; //ventana de dialogo

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MaterialModule

  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {


  constructor(
    public dialog: MatDialog,)
     { }
  ngOnInit(): void { }

  inisiarsesion(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      //width: '50%',
    });

  }









  year = new Date().getFullYear();


}
