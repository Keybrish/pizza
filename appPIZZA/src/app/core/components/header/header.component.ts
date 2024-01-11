import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { IMenu, MenuService } from 'src/app/services/menu.service';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from '../login/login.component';
import { User } from '../models/user.model';

@Component({
  selector: 'pizza-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onToggleExpanded: EventEmitter<boolean> = new EventEmitter<boolean>()
  listMenu: IMenu[]
  expanded = true
  logout: AuthService = this.authService

  constructor(private menuService: MenuService, private authService: AuthService) {
    this.listMenu = menuService.getMenu()
  }

  toggleExpanded(expanded: boolean){
    this.expanded = expanded
  }

  ngOnInit(): void {
  }

}
