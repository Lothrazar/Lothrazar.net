import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-github',
  templateUrl: './widget-github.component.html',
  styleUrls: ['./widget-github.component.css']
})
export class WidgetGithubComponent implements OnInit {
  @Input() private mod: IModPage;

  constructor() { }

  ngOnInit() {
  }

}
