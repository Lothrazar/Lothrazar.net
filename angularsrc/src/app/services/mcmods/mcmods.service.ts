import { Injectable } from '@angular/core';
import { IModPage } from 'src/app/data/IModPage';
import mods from 'src/assets/mods.json';

@Injectable({
  providedIn: 'root'
})
export class McmodsService {
  modList: IModPage[];
  modMap: Map<string, IModPage[]> = {};

  constructor() {
    for(const i in mods) {
      const m = mods[i];
      for(const j in m.versions) {
        const vers = m.versions[j];
        if(!this.modMap[vers]) {
          this.modMap[vers] = [];
        }
        this.modMap[vers].push(m);
      }
    }
    this.modList = mods;
  }

  getMods(): IModPage[] {
    return this.modList;
  }

  getVersionMods(vers: string): IModPage[] {
    return this.modMap[vers];
  }

}
