import { Component } from '@angular/core';
import { McmodsService } from './services/mcmods/mcmods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lothrazar.net';
  mods: IModPage[];

  constructor(modService: McmodsService) {
    this.mods = modService.getMods();
  }

}
