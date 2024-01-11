import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule
  ]
})
export class InformacionModule { }
