import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  showLogo: boolean = true;

  ngOnInit() {
    this.quitarLogo()
  }
  quitarLogo() {
    // Cambiar de la vista del logo al formulario después de 5 segundos
    setTimeout(() => {
      this.showLogo = false;
    }, 5000);
  }
}
