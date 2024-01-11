import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocionesRoutingModule } from './promociones-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CoreModule } from '../core/core.module';
import { PageClientePromocionComponent } from './pages/page-cliente-promocion/page-cliente-promocion.component';
import { HomeModule } from '../home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormClienteComponent } from './components/form-cliente/form-cliente.component';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent,
    PageClientePromocionComponent,
    FormClienteComponent
  ],
  imports: [
    CommonModule,
    PromocionesRoutingModule,
    SharedModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    CoreModule,
    HomeModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PromocionesModule { }
