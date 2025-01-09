import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  showLogo: boolean = true;
  
  constructor(private route: Router) { }
  
  ngOnInit() {
    this.quitarLogo()
  }
  quitarLogo() {
    // Cambiar de la vista del logo al formulario después de 5 segundos
    setTimeout(() => {
      this.showLogo = false;
    }, 5000);
  }
  
  login(){
    this.route.navigate(['/login']);
  }
  jugadores(){
    this.route.navigate(['/jugadores']);
  }
  inicio(){
    this.route.navigate(['/']);
  }
  registro() {
    this.route.navigate(['/registro']);
  }
}
