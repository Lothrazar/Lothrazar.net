import { Injectable } from '@angular/core';
import { IModPage } from 'src/app/data/IModPage';
import mods from 'src/assets/mods.json';

@Injectable({
  providedIn: 'root'
})
export class McmodsService {

  constructor() { }

  getMods(): IModPage[] {
    return mods;
  }

}
