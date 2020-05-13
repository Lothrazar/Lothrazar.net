import { Component, OnInit, Input } from '@angular/core';
import { IModPage } from 'src/app/data/IModPage';

@Component({
  selector: 'app-widget-curse',
  templateUrl: './widget-curse.component.html',
  styleUrls: ['./widget-curse.component.css']
})
export class WidgetCurseComponent implements OnInit {
  @Input() mod: IModPage;

  constructor() {
  }

  ngOnInit() {
  }

}
