import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LigasComponent } from './components/ligas/ligas.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'inicio', component: LigasComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
