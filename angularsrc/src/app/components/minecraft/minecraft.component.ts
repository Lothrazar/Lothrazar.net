import { Component, OnInit } from '@angular/core';
import { McmodsService } from '../../services/mcmods/mcmods.service';

@Component({
  selector: 'app-minecraft',
  templateUrl: './minecraft.component.html',
  styleUrls: ['./minecraft.component.css']
})
export class MinecraftComponent implements OnInit {

  mods:  IModPage[];
  constructor(modService: McmodsService) {
    this.mods = modService.getMods();
    this.sortByName();
  }

  ngOnInit() {
  }

  sortByName() {
    this.mods.sort((a,b) => a.name.localeCompare(b.name));
  }

}
