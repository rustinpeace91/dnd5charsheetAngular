import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Character } from './character';
import { CHARACTERS } from './mock-characters';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private charactersUrl = 'http://localhost:3000/cars';

  constructor(
    private http: HttpClient,
  ) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.charactersUrl)
  }
}
