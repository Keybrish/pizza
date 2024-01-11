import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../components/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = '/api/'

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: User): Observable<any>{
    return this.http.post(this.url + 'signUp', user)
  }

  signIn(user: User): Observable<any> {
    return this.http.post<any>(this.url + 'signIn', user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logout() {
    console.log('token')
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  getUser(user: User): Observable<any> {
    return this.http.post<any>(this.url + 'user', user)
  }
}
