import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Character } from '../models/character.model';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private url = 'https://swapi.co/api';

  constructor(private http: HttpClient) { }

  getCharacter(): Observable<Character[]> {
    const characters = JSON.parse(localStorage.getItem('characters'));
    if (!characters) {
         return this.http.get<Character[]>(`${this.url}/people/`)
            .pipe(map((res: any) => res.results ),tap(res => {
              localStorage.setItem('characters', JSON.stringify(res));
            }));
    } else {
     return of(characters);
    }
  }

  save(characters) {
     localStorage.setItem('characters', JSON.stringify(characters));
  }

  getFavorites() {
    return this.getCharacter().pipe(map((characters: any[]) => characters.filter(item => item.favorite)));
  }

}
