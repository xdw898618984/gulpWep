import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from "../../../../../do/index"
@Component({
  selector: 'app-heroprofile',
  templateUrl: './heroprofile.component.html',
  styleUrls: ['./heroprofile.component.css']
})
export class HeroprofileComponent implements AdComponent {
  @Input() data: any;
}
