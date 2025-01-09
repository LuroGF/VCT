import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { Jugadores } from '../../models/interfaces/Jugadores';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FormsModule],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.scss',
})
export class JugadoresComponent {
  public jugadores: Jugadores[] = [
    { id: 1, image: '../../../assets/jugadores/benji.svg', name: 'Boaster', team: 'Fnatic' },
    { id: 2, image: '../../../assets/jugadores/benji.svg', name: 'Alfajer', team: 'Fnatic' },
    { id: 3, image: '../../../assets/jugadores/benji.svg', name: 'Chronicle', team: 'Fnatic' },
    { id: 4, image: '../../../assets/jugadores/benji.svg', name: 'crashies', team: 'Fnatic' },
    { id: 5, image: '../../../assets/jugadores/benji.svg', name: 'kaajak', team: 'Fnatic' },

    { id: 6, image: '../../../assets/jugadores/benji.svg', name: 'keiko', team: 'Team Liquid' },
    { id: 7, image: '../../../assets/jugadores/benji.svg', name: 'nAts', team: 'Team Liquid' },
    { id: 8, image: '../../../assets/jugadores/benji.svg', name: 'kamo', team: 'Team Liquid' },
    { id: 9, image: '../../../assets/jugadores/benji.svg', name: 'paTiTek', team: 'Team Liquid' },
    { id: 10, image: '../../../assets/jugadores/benji.svg', name: 'kamyk', team: 'Team Liquid' },
    { id: 11, image: '../../../assets/jugadores/benji.svg', name: 'ANGE1', team: 'Natus Vincere' },
    { id: 12, image: '../../../assets/jugadores/benji.svg', name: 'Shao', team: 'Natus Vincere' },
    { id: 13, image: '../../../assets/jugadores/benji.svg', name: 'koalanoob', team: 'Natus Vincere' },
    { id: 14, image: '../../../assets/jugadores/benji.svg', name: 'hiro', team: 'Natus Vincere' },
    { id: 15, image: '../../../assets/jugadores/benji.svg', name: 'Ruxic', team: 'Natus Vincere' },
    { id: 16, image: '../../../assets/jugadores/benji.svg', name: 'Sayf', team: 'Team Vitality' },
    { id: 17, image: '../../../assets/jugadores/benji.svg', name: 'Less', team: 'Team Vitality' },
    { id: 18, image: '../../../assets/jugadores/benji.svg', name: 'Kicks', team: 'Team Vitality' },
    { id: 19, image: '../../../assets/jugadores/benji.svg', name: 'trexx', team: 'Team Vitality' },
    { id: 20, image: '../../../assets/jugadores/benji.svg', name: 'Derke', team: 'Team Vitality' },
    { id: 21, image: '../../../assets/jugadores/benji.svg', name: 'westside', team: 'Giants Gaming' },
    { id: 22, image: '../../../assets/jugadores/benji.svg', name: 'Runner', team: 'Giants Gaming' },
    { id: 23, image: '../../../assets/jugadores/benji.svg', name: 'tomaszy', team: 'Giants Gaming' },
    { id: 24, image: '../../../assets/jugadores/benji.svg', name: 'purp0', team: 'Giants Gaming' },
    { id: 25, image: '../../../assets/jugadores/benji.svg', name: 'Cloud', team: 'Giants Gaming' },
    { id: 26, image: '../../../assets/jugadores/benji.svg', name: 'soulcas', team: 'KOI' },
    { id: 27, image: '../../../assets/jugadores/benji.svg', name: 'flyuh', team: 'KOI' },
    { id: 28, image: '../../../assets/jugadores/benji.svg', name: 'Filu', team: 'KOI' },
    { id: 29, image: '../../../assets/jugadores/benji.svg', name: 'sheydos', team: 'KOI' },
    { id: 30, image: '../../../assets/jugadores/benji.svg', name: 'GRUBINHO', team: 'KOI' },
    { id: 31, image: '../../../assets/jugadores/benji.svg', name: 'w00t', team: 'Team Heretics' },
    { id: 32, image: '../../../assets/jugadores/benji.svg', name: 'benjyfishy', team: 'Team Heretics' },
    { id: 33, image: '../../../assets/jugadores/benji.svg', name: 'Boo', team: 'Team Heretics' },
    { id: 34, image: '../../../assets/jugadores/benji.svg', name: 'miniboo', team: 'Team Heretics' },
    { id: 35, image: '../../../assets/jugadores/benji.svg', name: 'benjyfishy', team: 'Team Heretics' },
    { id: 36, image: '../../../assets/jugadores/benji.svg', name: 'Saadhak', team: 'Karmine Corp' },
    { id: 37, image: '../../../assets/jugadores/benji.svg', name: 'SUYGETSU', team: 'Karmine Corp' },
    { id: 38, image: '../../../assets/jugadores/benji.svg', name: 'Elite', team: 'Karmine Corp' },
    { id: 39, image: '../../../assets/jugadores/benji.svg', name: 'avez', team: 'Karmine Corp' },
    { id: 40, image: '../../../assets/jugadores/benji.svg', name: 'marteen', team: 'Karmine Corp' },
    { id: 41, image: '../../../assets/jugadores/benji.svg', name: 'MrFaliN', team: 'FUT Esports' },
    { id: 42, image: '../../../assets/jugadores/benji.svg', name: 'qRaxs', team: 'FUT Esports' },
    { id: 43, image: '../../../assets/jugadores/benji.svg', name: 'yetujey', team: 'FUT Esports' },
    { id: 44, image: '../../../assets/jugadores/benji.svg', name: 'ATA KAPTAN', team: 'FUT Esports' },
    { id: 45, image: '../../../assets/jugadores/benji.svg', name: 'xeus', team: 'FUT Esports' },
    { id: 46, image: '../../../assets/jugadores/benji.svg', name: 'LewN', team: 'BBL Esports' },
    { id: 47, image: '../../../assets/jugadores/benji.svg', name: 'Jamppi', team: 'BBL Esports' },
    { id: 48, image: '../../../assets/jugadores/benji.svg', name: 'PROFEK', team: 'BBL Esports' },
    { id: 49, image: '../../../assets/jugadores/benji.svg', name: 'chiwa', team: 'BBL Esports' },
    { id: 50, image: '../../../assets/jugadores/benji.svg', name: 'sociablEE', team: 'BBL Esports' },
    { id: 51, image: '../../../assets/jugadores/benji.svg', name: 'K4DAVRA', team: 'Gentle Mates' },
    { id: 52, image: '../../../assets/jugadores/benji.svg', name: 'Click', team: 'Gentle Mates' },
    { id: 53, image: '../../../assets/jugadores/benji.svg', name: 'Minny', team: 'Gentle Mates' },
    { id: 54, image: '../../../assets/jugadores/benji.svg', name: 'Zyppan', team: 'Gentle Mates' },
    { id: 55, image: '../../../assets/jugadores/benji.svg', name: 'RobbieBk', team: 'Gentle Mates' },
  ];
  public filteredJugadores: Jugadores[] = [...this.jugadores]; // Copia inicial
  public searchQuery: string = ''; // Consulta de búsqueda
  public availableTeams: string[] = []; // Equipos disponibles
  public selectedTeam: string = ''; // Equipo seleccionado
  constructor(private route: Router) {
    this.populateAvailableTeams();
  }

  showPlayerDetails(player: string) {
    alert(`Mostrando estadísticas detalladas para ${player}`);
  }
  login() {
    this.route.navigate(['/login']);
  }
  inicio() {
    this.route.navigate(['/']);
  }

  // Fitrar jugadores
  filterPlayers() {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredJugadores = this.jugadores.filter(
      (jugador) =>
        jugador.name.toLowerCase().includes(query) ||
        jugador.team.toLowerCase().includes(query)
    );
  }
  // Coge el nombre de los equipos
  populateAvailableTeams() {
    const teams = new Set(this.jugadores.map((jugador) => jugador.team));
    this.availableTeams = Array.from(teams); // Convertir a array
  }
  // Filtrar por equipo

  filterByTeam() {
    if (this.selectedTeam) {
      this.filteredJugadores = this.jugadores.filter(
        (jugador) => jugador.team === this.selectedTeam
      );
    } else {
      this.filteredJugadores = [...this.jugadores]; // Mostrar todos si no hay filtro
    }
  }
}
