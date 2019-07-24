import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  // characters = CHARACTERS;
  // selectedCharacter: Character;
  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void{
    this.characters = this.characterService.getCharacters();
  }
  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }

}
