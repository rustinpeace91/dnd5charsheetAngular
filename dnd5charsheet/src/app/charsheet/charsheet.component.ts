import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Character } from '../character';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.css']
})
export class CharsheetComponent implements OnInit {

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


  @Input() form: FormGroup = new FormGroup({})
  fields: any[] = []
  constructor() { }

  ngOnInit() {
    
  }
  ngOnChanges() {
    this.fields = Object.keys(this.form.value)
  }
  printForm(){
    console.log(this.form.value)
  }

}
