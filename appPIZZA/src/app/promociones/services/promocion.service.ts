import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promociones } from '../models/promocion.model';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  url = '/api/promociones/'

  constructor(private http: HttpClient) { }

  loadPromociones(): Observable<any> {
    return this.http.get(this.url)
  }

  loadPromocion(id: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  addPromocion(promocion: Promociones): Observable<any> {
    return this.http.post(this.url, promocion)
  }

  updatePromocion(id: string, promocion: Promociones): Observable<any> {
    return this.http.put(this.url + id, promocion)
  }

  deletePromocion(id: string): Observable<any> {
    return this.http.delete(this.url + id)
  }
}
