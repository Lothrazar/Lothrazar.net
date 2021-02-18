import { Component, OnInit, ViewChild } from '@angular/core';
import { McmodsService } from 'src/app/services/mcmods/mcmods.service';
import { IModPage } from 'src/app/data/IModPage';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-minecraft',
  templateUrl: './minecraft.component.html',
  styleUrls: ['./minecraft.component.css']
})
export class MinecraftPageComponent implements OnInit {

  group: string = null;
  mods: IModPage[] = [];
  constructor(public modService: McmodsService, public router: Router, private route: ActivatedRoute) {
    this.mods = modService.getMods();
    this.route.queryParams
    .subscribe(params => {

      this.group = params.version;
      this.sortByName();
    });
  }

  ngOnInit(): void {
  }

  sortByName(): void {
    if(this.group) {
      this.mods = this.modService.getVersionMods(this.group);
    }
    else {
      this.mods = this.modService.getMods();
    }
    this.mods.sort((a,b) => a.name.localeCompare(b.name));
  }

  onChange($event): void {
    if($event.value) {
      this.router.navigate(['/minecraft'], {queryParams:{version: $event.value}});
    }
    else {
      this.router.navigate(['/minecraft']);
    }
  }
}
