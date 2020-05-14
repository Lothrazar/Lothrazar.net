import { Injectable } from '@angular/core';
import { IModPage } from 'src/app/data/IModPage';
import mods from 'src/assets/mods.json';

@Injectable({
  providedIn: 'root'
})
export class McmodsService {
  modList:  IModPage[];

  constructor() {
    for(var m in mods) {
      //
      for(var vers in mods.versions){
      }
    }
    this.modList = mods;
  }

  getMods(): IModPage[] {
    return this.modList;
  }

}
