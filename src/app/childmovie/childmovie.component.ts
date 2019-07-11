import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-childmovie',
  templateUrl: './childmovie.component.html',
  styleUrls: ['./childmovie.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildmovieComponent implements OnInit {
  // changeDetection: ChangeDetectionStrategy.OnPush
  constructor(private changeRef: ChangeDetectorRef) { }
  @Input() star: any;
  @Input() title: string;
  ngOnInit() {

  }

}
