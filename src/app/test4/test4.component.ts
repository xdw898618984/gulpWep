import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../common/test1/test1.component';

@Component({ selector: 'app-test4', templateUrl: './test4.component.html', styleUrls: ['./test4.component.css'] })
export class Test4Component implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() { }

}
