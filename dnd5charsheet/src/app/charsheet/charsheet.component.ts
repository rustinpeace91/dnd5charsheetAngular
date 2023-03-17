import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Character } from '../character.model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.css']
})
export class CharsheetComponent implements OnInit, OnChanges {

  @Input() character: Character = new Character(
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

  ability_scores = [
    'strength',
    'dexterity', 
    'constitution', 
    'intelligence', 
    'wisdom', 
    'charisma'
  ]
  characterForm: FormGroup = new FormGroup({
    strength: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    dexterity: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    constitution: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    intelligence: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    wisdom: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    charisma: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    charClass: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
    race: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
    level: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$]')])
  });

  hitDie: string = 'D4';
  HP: number = 0;

  constructor() { }

  ngOnInit() {
    let formFields = Object.keys(this.characterForm.value)
    for (let prop in this.character) {
      if (this.character.hasOwnProperty(prop) && formFields.includes(prop)) {
        this.characterForm.controls[prop].setValue(this.character[prop]);
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    let formFields = Object.keys(this.characterForm.value)
    for (let prop in this.character) {
      if (this.character.hasOwnProperty(prop) && formFields.includes(prop)) {
        this.characterForm.controls[prop].setValue(this.character[prop]);
      }
    }
  }

  printForm(){
    console.log(this.characterForm.value)
  }

}
