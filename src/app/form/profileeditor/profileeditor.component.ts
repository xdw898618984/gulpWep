import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// valistaors 常用验证器函数
@Component({ selector: 'app-profileeditor', templateUrl: './profileeditor.component.html', styleUrls: ['./profileeditor.component.css'] })
export class ProfileeditorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  // profileForm = new FormGroup({
  //   // firstName: new FormControl(''),
  //   // lastName: new FormControl(''),
  //   // address: new FormGroup({ street: new FormControl(''), city: new
  //  FormControl(''), state: new FormControl(''), zip: new FormControl('') })



  // });


  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });
  ngOnInit() { }

  onSubmit() {
    console.warn(this.profileForm);

  }
  updateProfile() {
    this
      .profileForm
      .patchValue({
        firstName: '熊德伟',
        address: {
          street: '123 dw'
        }
      });
  }
}
