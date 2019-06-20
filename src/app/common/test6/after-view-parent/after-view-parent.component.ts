import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../../service/logger.service';

@Component({
  selector: 'app-after-view-parent',
  templateUrl: './after-view-parent.component.html',
  styleUrls: ['./after-view-parent.component.css']
})
export class AfterViewParentComponent implements OnInit {
  show = true;
  constructor(private logger: LoggerService) { }

  ngOnInit() {
  }
  reset() {
    this.logger.clear();
    this.show = false;
    this.logger.tick_then(() => this.show = true)
  }

}
