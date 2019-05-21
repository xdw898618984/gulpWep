import { Component, OnInit } from '@angular/core';
import { User } from "../../do/index";
import { getProvinces, getCitiesByProvince, getAreasByCity } from '../units/area';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public myform;
  user: User = {
    email: '',
    password: '',
    repeat: '',
    address: {
      province: '',
      city: '',
      area: '',
      street: ''
    },

  };
  email: '';
  password: '';
  repeat: '';
  provinces = getProvinces();

  cities = [];
  areas = [];
  constructor() {
    console.log(this.provinces);//省
  }

  ngOnInit() {

  }
  onProvinceChange() {
    this.cities = getCitiesByProvince(this.user.address.province);//市
    console.log(this.user.address.province);

    this.areas = [];
    this.user.address.area = '';
    this.user.address.city = '';
  }

  onCityChange() {
    this.areas = getAreasByCity(this.user.address.province, this.user.address.city);//县区
    this.user.address.area = '';
  }

  onSubmit({ value, valid }, event: Event) {
    if (valid) {
      console.log(value);
    }
    event.preventDefault();
  }
}
