import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  get(key: string): string | null {
    return window.localStorage.getItem(key);
  }
  getJson(key: string): any {
    const contents = this.get(key);
    if(contents == null) {
      return null;
    }
    return JSON.parse(contents);
  }
  put(key: string, data: object): void {
    window.localStorage.setItem(key, JSON.stringify(data));
  }
}
