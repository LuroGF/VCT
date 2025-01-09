import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.scss'
})
export class JugadoresComponent {

    constructor(private route: Router) { }
  
  showPlayerDetails(player: string) {
    alert(`Mostrando estadísticas detalladas para ${player}`);
  }
  login(){
    this.route.navigate(['/login']);
  }
  inicio(){
    this.route.navigate(['/']);
  }
}
