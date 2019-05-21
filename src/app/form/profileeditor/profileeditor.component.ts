import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms"
@Component({
  selector: 'app-profileeditor',
  templateUrl: './profileeditor.component.html',
  styleUrls: ['./profileeditor.component.css']
})
export class ProfileeditorComponent implements OnInit {

  constructor() { }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')

    })
  })
  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.profileForm);

  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: '熊德伟', address: {
        street:'123 dw'
      }
    })
  }
}
