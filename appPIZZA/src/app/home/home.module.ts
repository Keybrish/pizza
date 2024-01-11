import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { BarraComponent } from './components/barra/barra.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarraDosComponent } from './components/barra-dos/barra-dos.component';
import { PageMenuComponent } from './pages/page-menu/page-menu.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { PagePromotionComponent } from './pages/page-promotion/page-promotion.component';
import { BarraTresComponent } from './components/barra-tres/barra-tres.component';


@NgModule({
  declarations: [
    PageHomeComponent,
    BarraComponent,
    BarraDosComponent,
    PageMenuComponent,
    CardComponent,
    PagePromotionComponent,
    BarraTresComponent,
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
    MatCardModule,
    SharedModule,
    MatGridListModule,
    FormsModule
  ],
  exports: [
    PageHomeComponent,
    BarraComponent,
    BarraDosComponent,
    BarraTresComponent
  ]
})
export class HomeModule { }
