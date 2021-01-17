import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'lothrazar.net';

  constructor() { }

  ngOnInit() {
  }

  getWindow() {
    return window;
  }

}
