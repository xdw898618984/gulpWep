import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public myform;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(value,event) {
    this.myform = value;
    console.log(this.myform);
  }
  // submit() {
  //   console.log(this.myform);
  // }
}
