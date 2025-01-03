import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {
  showLogo: boolean = true;

  ngOnInit() {
    this.quitarLogo()
  }
  quitarLogo() {
    setTimeout(() => {
      this.showLogo = false;
    }, 5000);
  }
}
