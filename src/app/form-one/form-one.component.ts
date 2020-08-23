import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss']
})
export class FormOneComponent implements OnInit {

  text = '';
  constructor() { }

  ngOnInit(): void {
  }
  input(e: any): void {
    this.text = e.target.value;
  }

}
