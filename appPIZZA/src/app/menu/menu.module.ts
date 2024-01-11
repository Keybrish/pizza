import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CoreModule } from '../core/core.module';
import { PageClienteMenuComponent } from './pages/page-cliente-menu/page-cliente-menu.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent,
    PageClienteMenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    CoreModule,
    HomeModule
  ]
})
export class MenuModule { }
