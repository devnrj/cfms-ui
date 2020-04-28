import { Injectable } from '@angular/core';
import { MenuItem } from '../shared/entity/MenuItem';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  menuItems: MenuItem[] = [];
  constructor() { 
    this.menuItems.push(...[new MenuItem("Home","/"), new MenuItem("Student","student/"), new MenuItem("Admin","admin/")]);
  }
  getMenus() : MenuItem[]{
    return this.menuItems;
  }
  setMenus(menuItems: MenuItem[]) {
    this.menuItems = menuItems;
  }
}
