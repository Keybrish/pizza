import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'pizza-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hidePassword = true;
  user: User = {
    email: '',
    password: '',
    name: '',
    lastName: '',
    type: ''
  }

  data: any[] = []

  usuario: User = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    type: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.signIn(this.user).subscribe((res) => {
      this.authService.getUser(this.user).subscribe(data => {
        console.log(data)
        this.usuario = data
        console.log(this.usuario)
        if (this.usuario.type === "A") {
          this.router.navigate(['/menu'])
        } else {
          this.router.navigate(['/pedidoCliente'])
        }
        localStorage.setItem('token', res.token)
      }, (err) => console.log(err))
    }, (err) => console.log(err))
  }

  getUser(): User {
    this.authService.getUser(this.user).subscribe(res => {
      console.log(res)
      this.usuario = res
      console.log(this.usuario)
      return this.usuario
    }, (err) => console.log(err))
    return this.usuario
  }
}