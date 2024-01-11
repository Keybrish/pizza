import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './components/login/login.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageLoginComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HomeModule,
    FormsModule
  ],
  exports: [
    PageLoginComponent,
    HeaderComponent,
    MenuComponent
  ]
})
export class CoreModule { }
