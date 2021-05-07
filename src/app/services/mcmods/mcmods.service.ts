import { Injectable } from '@angular/core';
import { IModPage } from 'src/app/data/';
import mods from 'src/assets/mods.json';

@Injectable({
  providedIn: 'root'
})
export class McmodsService {
  modList: IModPage[];
  modVersionMap = {};
  modMap = {};

  selected = {
    '1.7.10': false,
    '1.12': false,
    '1.16': false
  }

  constructor() {
    for(const i in mods) {
      const m = mods[i];
      this.modMap[m.curseSlug] = m;
      for(const j in m.versions) {
        const vers = m.versions[j];
        if(!this.modVersionMap[vers]) {
          this.modVersionMap[vers] = [];
        }
        this.modVersionMap[vers].push(m);
      }
    }
    this.modList = mods;
    console.log(this.modMap);
  }

  getMod(slug: string): IModPage {
    return this.modMap[slug];
  }

  getMods(): IModPage[] {
    return this.modList;
  }

  getVersionMods(vers: string): IModPage[] {
    return this.modVersionMap[vers];
  }
}
