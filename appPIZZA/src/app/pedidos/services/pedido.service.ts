import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedidos } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  url = '/api/pedidos/'

  constructor(private http: HttpClient) { }

  loadPedidos(): Observable<any> {
    return this.http.get(this.url)
  }

  loadPedido(id: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  addPedidos(pedido: Pedidos): Observable<any>{
    return this.http.post(this.url, pedido)
  }

  updatePedidos(id: string, pedidos: Pedidos): Observable<any>{
    return this.http.put(this.url+id, pedidos)
  }

  deletePedidos(id: string): Observable<any>{
    return this.http.delete(this.url+id)
  }
}
