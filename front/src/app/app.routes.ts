import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { RegistroComponent } from './components/registro/registro.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
