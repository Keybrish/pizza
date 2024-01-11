import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizzas } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceDos {

  url = '/api/pizzas/'

  constructor(private http: HttpClient) { }

  loadPizzas(): Observable<any> {
    return this.http.get(this.url)
  }

  loadPizza(id: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  addPizza(agencia: Pizzas): Observable<any>{
    return this.http.post(this.url, agencia)
  }

  updatePizza(id: string, pizza: Pizzas): Observable<any>{
    return this.http.put(this.url+id, pizza)
  }

  deletePizza(id: string): Observable<any>{
    return this.http.delete(this.url+id)
  }
}
