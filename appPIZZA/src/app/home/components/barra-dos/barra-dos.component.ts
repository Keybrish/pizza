import { Component, OnInit } from '@angular/core';
import { IMenu, MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'pizza-barra-dos',
  templateUrl: './barra-dos.component.html',
  styleUrls: ['./barra-dos.component.css']
})
export class BarraDosComponent implements OnInit {

  listMenu: IMenu[]
  pizza: IMenu;
  
  constructor(private menuService: MenuService) {
    this.listMenu = menuService.getMenu();
    this.pizza = this.listMenu[4];
  }

  ngOnInit(): void {
  }

}
