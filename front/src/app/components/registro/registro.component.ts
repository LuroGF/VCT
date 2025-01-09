import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss',
})
export class RegistroComponent {
  constructor(private route: Router, private _location: Location) {}

  login() {
    this.route.navigate(['/login']);
  }

  jugadores() {
    this.route.navigate(['/jugadores']);
  }
  inicio() {
    this.route.navigate(['/']);
  }

  volver() {
    this.route.navigate(['/login']);
  }
}
