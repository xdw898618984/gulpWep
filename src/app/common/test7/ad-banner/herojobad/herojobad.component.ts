import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from "../../../../../do/index"
@Component({
  selector: 'app-herojobad',
  templateUrl: './herojobad.component.html',
  styleUrls: ['./herojobad.component.css']
})
export class HerojobadComponent implements AdComponent {
  @Input() data: any;
}
