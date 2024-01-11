import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { PageClienteComponent } from './pages/page-cliente/page-cliente.component';
import { HomeModule } from '../home/home.module';
import { FormClienteComponent } from './components/form-cliente/form-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent,
    PageClienteComponent,
    FormClienteComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    SharedModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    CoreModule,
    FormsModule,
    HomeModule,
    ReactiveFormsModule
  ]
})
export class PedidosModule { }
