// src/app/services/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Importa las interfaces
import { NewsResponse } from '../models/interfaces/Noticia';
import { StatsResponse } from '../models/interfaces/Estadisticas';
import { RankingsResponse } from '../models/interfaces/Rankings';
import { MatchResponse, MatchType } from '../models/interfaces/Partidos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'https://vlrggapi.vercel.app';

  constructor(private http: HttpClient) { }

  // Método para obtener las últimas noticias
  getNews(): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(`${this.BASE_URL}/news`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para obtener estadísticas de jugadores
  getStats(region: string, timespan: string): Observable<StatsResponse> {
    let params = new HttpParams()
      .set('region', region)
      .set('timespan', timespan);

    return this.http.get<StatsResponse>(`${this.BASE_URL}/stats`, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para obtener rankings
  getRankings(region: string): Observable<RankingsResponse> {
    let params = new HttpParams()
      .set('region', region);

    return this.http.get<RankingsResponse>(`${this.BASE_URL}/rankings`, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para obtener información de partidos
  getMatch(q: MatchType): Observable<MatchResponse> {
    let params = new HttpParams()
      .set('q', q);

    return this.http.get<MatchResponse>(`${this.BASE_URL}/match`, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para crear un nuevo usuario (Ejemplo anterior)
  // ... (mantén tus métodos anteriores aquí)

  // Método para manejar errores
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
