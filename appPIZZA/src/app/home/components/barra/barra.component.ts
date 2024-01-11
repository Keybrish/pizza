import { Component, OnInit } from '@angular/core';
import { IMenu, MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'pizza-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  listMenu: IMenu[]
  pizza: IMenu;
  
  constructor(private menuService: MenuService) {
    this.listMenu = menuService.getMenu();
    this.pizza = this.listMenu[4];
  }

  ngOnInit(): void {
  }

}
