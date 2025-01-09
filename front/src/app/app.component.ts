import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { HttpClientModule } from '@angular/common/http';
import { LanguageService } from './services/language/language.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StartComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(public langService: LanguageService) {}

  ngOnInit() {
    // this.langService.detectLanguage();
  }
  title = 'VCT TV';
}
