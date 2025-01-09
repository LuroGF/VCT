import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
