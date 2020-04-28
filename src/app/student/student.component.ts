import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { MenuItem } from '../shared/entity/MenuItem';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  menuService : MenuService;
  constructor(menuService: MenuService) { 
    this.menuService = menuService;
  }

  ngOnInit(): void {
    this.menuService.setMenus([new MenuItem("sub1",'/sub1')]);
  }

}
