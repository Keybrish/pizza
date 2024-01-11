import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { KeypadButtonComponent } from './components/keypad-button/keypad-button.component';
import { DownloadComponent } from './components/download/download.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    KeypadButtonComponent,
    DownloadComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatListModule
  ],
  exports: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PerfectScrollbarModule,
    PaginatorComponent,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    KeypadButtonComponent,
    MatBottomSheetModule,
    DownloadComponent,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }