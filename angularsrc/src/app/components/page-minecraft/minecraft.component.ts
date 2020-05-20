import { Component, OnInit, ViewChild } from '@angular/core';
import { McmodsService } from 'src/app/services/mcmods/mcmods.service';
import { IModPage } from 'src/app/data/IModPage';
import { MatButtonToggleModule } from '@angular/material';

@Component({
  selector: 'app-minecraft',
  templateUrl: './minecraft.component.html',
  styleUrls: ['./minecraft.component.css']
})
export class MinecraftPageComponent implements OnInit {

  private group: string = null;
  public mods: IModPage[];
  constructor(public modService: McmodsService) {
    this.mods = modService.getMods();
    this.sortByName();
  }

  ngOnInit(): void {
  }

  sortByName(): void {
    this.mods.sort((a,b) => a.name.localeCompare(b.name));
  }

  onChange($event): void {
    this.group = $event.value;
    if(this.group) {
      this.mods = this.modService.getVersionMods(this.group);
    }
    else {
      this.mods = this.modService.getMods();
    }
  }
}
