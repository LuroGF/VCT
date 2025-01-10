import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ligas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ligas.component.html',
  styleUrl: './ligas.component.scss'
})
export class LigasComponent {

}
