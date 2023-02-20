import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Character } from '../character';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.css']
})
export class CharsheetComponent implements OnInit {

  character: Character = new Character(
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


  form: FormGroup = new FormGroup({});
  fields: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCharacter()
  }

  getCharacter(): void{
    // console.log(this.route.snapshot.paramMap.get('id'))

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    // TODO: Move this to the service when a more robust backend is filled out
    this.characterService.getCharacters().subscribe( chars =>{
      chars.forEach(e => {
        console.log(id)
        if (e.id.toString() === id) {
          this.character = e;
          let keys = Object.keys(this.character)
          keys.forEach(k=>{
            this.form.addControl(k, new FormControl(this.character[k as keyof Character]))
          })
          this.fields = Object.keys(this.form.value)
        }
      })
    })
  }

  ngOnChanges() {
    
  }

  goBack(){
    this.location.back();
  }

  printForm(){
    console.log(this.form.value)
  }

}
