import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character';
import { Observable, of } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [
    new Character(
      0,
      0,
      '',
      '',
      0,
      0,
      0,
      0,
      0,
      0,
      '',
      ''
    )
  ]
  selectedCharacter: Character = new Character(
    0,
    0,
    '',
    '',
    0,
    0,
    0,
    0,
    0,
    0,
    '',
    ''
  )
  form: FormGroup = new FormGroup({})


  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
    .subscribe(characters => this.characters = characters);
  }
  onSelect(character: Character): void {
    this.selectedCharacter = character;
    console.log(character)
    this.form = new FormGroup({})
    let keys = Object.keys(character)
    keys.forEach(k=>{
      this.form.addControl(k, new FormControl(character[k as keyof Character]))
    })

  }

}
