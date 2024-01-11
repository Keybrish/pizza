import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IMenu {
  title: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private listMenu: IMenu[] = [
    { title: 'Pizzas', url: '/menu', icon: 'local_pizza' },
    { title: 'Promociones', url: '/promociones', icon: 'fastfood' },
    { title: 'Pedidos', url: '/pedidos', icon: 'playlist_add' }
  ]

  constructor(private http: HttpClient) { }

  getMenu(): IMenu[] {
    return [...this.listMenu]
  }

  getMenuByUrl(url: string): IMenu {
    return this.listMenu.find((menu) => menu.url.toLowerCase() === url.toLowerCase()) as IMenu
  }

}
