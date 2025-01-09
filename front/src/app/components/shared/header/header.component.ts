import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen: boolean = false;

  constructor(private route: Router, private _location: Location) {}
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  login() {
    this.route.navigate(['/login']);
  }

  jugadores() {
    this.route.navigate(['/jugadores']);
  }
  inicio() {
    this.route.navigate(['/']);
  }
}
