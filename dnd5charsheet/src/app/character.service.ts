import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Character } from './character.model';
import { environment } from '../environments/environment';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private charactersUrl = '/assets/chars.json';

  constructor(
    private http: HttpClient,
  ) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.charactersUrl);
  }
}
