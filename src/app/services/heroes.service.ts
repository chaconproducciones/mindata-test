import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { URLS_ENDPOINTS } from 'src/app/constants/constants';
import { environment } from 'src/environments/environment';
import { Heroes } from 'src/app/models/heroes.model';
import { DEFAULT_HEADERS } from './services.helper';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public heroeForEdit = new BehaviorSubject<Heroes>(null);

  constructor(private http: HttpClient) { }

  public getHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${environment.BASE_URL}${URLS_ENDPOINTS.HEROES}`, { headers: DEFAULT_HEADERS });
  }

  public getHeroesById(heroeId: number): Observable<Heroes> {
    return this.http.get<Heroes>(`${environment.BASE_URL}${URLS_ENDPOINTS.HEROES_ID.replace(":id", heroeId.toString())}`, { headers: DEFAULT_HEADERS });
  }

  public deleteHeroes(heroeId: number): Observable<Heroes[]> {
    return this.http.delete<Heroes[]>(`${environment.BASE_URL}${URLS_ENDPOINTS.HEROES_ID.replace(":id", heroeId.toString())}`, { headers: DEFAULT_HEADERS });
  }

  public saveHeroes<T>(heroe: Heroes): Observable<T> {
    return this.http.post<T>(`${environment.BASE_URL}${URLS_ENDPOINTS.HEROES}`, heroe , { headers: DEFAULT_HEADERS });
  }

  public updateHeroes<T>(heroe: Heroes, heroeId:number): Observable<T> {
    return this.http.put<T>(`${environment.BASE_URL}${URLS_ENDPOINTS.HEROES}/${heroeId}`, heroe , { headers: DEFAULT_HEADERS });
  }
}
