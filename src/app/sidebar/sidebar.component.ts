import { Component, OnInit, Inject } from '@angular/core';
import { MenuService} from '../menu/menu.service';
import { MenuItem } from '../shared/entity/MenuItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems : MenuItem[];
  _menuService: MenuService;
  constructor(menuService : MenuService) { 
    this._menuService= menuService; 
  }

  ngOnInit(): void {
    this.refreshMenus();
  }
  refreshMenus(){
    this.menuItems = this._menuService.getMenus();
  }
}
