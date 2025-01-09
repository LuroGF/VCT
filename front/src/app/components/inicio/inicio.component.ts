import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {
  showLogo: boolean = true;
  ngOnInit() {
    this.quitarLogo()
  }

  constructor(private route: Router) { }

  login(){
    this.route.navigate(['/login']);
  }
  jugadores(){
    this.route.navigate(['/jugadores']);
  }
  inicio(){
    this.route.navigate(['/']);
  }
  quitarLogo() {
    setTimeout(() => {
      this.showLogo = false;
    }, 5000);
  }
}
