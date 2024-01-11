import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'pizza-barra-tres',
  templateUrl: './barra-tres.component.html',
  styleUrls: ['./barra-tres.component.css']
})
export class BarraTresComponent implements OnInit {

  logout: AuthService = this.authService

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
