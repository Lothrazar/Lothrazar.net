import { Component, OnInit, Input } from '@angular/core';
import { IModPage } from 'src/app/data/';

@Component({
  selector: 'app-mcmod',
  templateUrl: './mcmod.component.html',
  styleUrls: ['./mcmod.component.css']
})
export class McmodComponent implements OnInit {

  @Input() mod: IModPage;

  constructor() {
  }

  ngOnInit() {
  }

}
