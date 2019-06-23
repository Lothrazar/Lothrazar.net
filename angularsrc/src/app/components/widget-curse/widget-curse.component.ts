import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-curse',
  templateUrl: './widget-curse.component.html',
  styleUrls: ['./widget-curse.component.css']
})
export class WidgetCurseComponent implements OnInit {
  @Input() private mod: IModPage;

  constructor() { 
  }

  ngOnInit() {
  }
 
}
