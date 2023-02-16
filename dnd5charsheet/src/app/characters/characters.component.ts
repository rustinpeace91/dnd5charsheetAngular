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

  characters: Character[];
  selectedCharacter: Character;
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
    let keys = Object.keys(character)
    keys.forEach(k=>{
      this.form.addControl(k, new FormControl(character[k]))
    })

  }

}
