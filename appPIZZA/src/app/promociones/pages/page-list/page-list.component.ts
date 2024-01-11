import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { KeypadButton } from 'src/app/shared/interfaces/keypad.interface';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { FormComponent } from '../../components/form/form.component';
import { PromocionService } from '../../services/promocion.service';

@Component({
  selector: 'pizza-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  records: any[] = [
    {_id:1, name: 'Mr. Pizza  + Nachos', price: '$' + 10.50, day: 'Lunes'},
    {_id:2, name: 'Pizza Americana + Cola Grande', price: '$' + 10.50, day: 'Martes'},
    {_id:3, name: 'Pizza Extravagante + Ensalada de la Casa + Cola Grande', price: '$' + 10.50, day: 'Miércoles'},
    {_id:4, name: 'Pizza 4 Estaciones + Pizza Pequeña a Elección', price: '$' + 17.50, day: 'Juves'},
    {_id:5, name: 'Pizza Diabólica + Nachos + Cola Grande', price: '$' + 15.0, day: 'Viernes'},
  ]

  metaDataColumns: MetaDataColumn[] = [
    {field: "_id", title: "ID"},
    {field: "name", title: "PROMOCIÓN"},
    {field: "day", title: "DÍA PROMOCIÓN"},
    {field: "price", title: "PRECIO"}
  ]

  data: any[] = []
  totalRecors = this.data.length

  keypadButtons: KeypadButton[] = [
    { icon: "arrow_downward", tooltip: "EXPORTAR", color: "accent", action: "DOWNLOAD" },
    { icon: "add", tooltip: "AÑADIR", color: "primary", action: "NEW" }
  ]

  constructor(private bottomSheet: MatBottomSheet, private promocionService: PromocionService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.loadPromociones()
  }

  ngOnInit(): void {
  }

  // loadPizzas(){
  //   this.data = this.records
  //   this.totalRecors = this.records.length
  //   this.changePage(0)
  // }

  loadPromociones() {
    this.promocionService.loadPromociones().subscribe(data => {
      this.records = data
      this.totalRecors = this.records.length
      this.changePage(0)
    }, error => {
      console.log(error)
    })
  }

  changePage(page: number){
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.data = this.records.slice(skip, skip + pageSize)
  }

  openForm(row: any = null) {
    const options = {
      panelClass: 'panel-container', disableClose: true, data: row
    }
    const reference: MatDialogRef<FormComponent> = this.dialog.open(FormComponent, options)
    reference.afterClosed().subscribe((response) => {
      if(!response){
        return
      }
      if(response.id){
        const promocion = {...response}
        this.promocionService.updatePromocion(response.id, promocion).subscribe(() => {
          this.loadPromociones()
          this.showMessage('Registro actualizado.')
        })
      } else {
        const promocion = {...response}
        this.promocionService.addPromocion(promocion).subscribe(() => {
          this.loadPromociones()
          this.showMessage('Registro exitoso.')
        })
      }
    })
  }

  delete(id: any) {
    this.promocionService.deletePromocion(id).subscribe(() => {
      this.loadPromociones()
      this.showMessage('Eliminación exitosas.')
    })
  }

  doAction(action: string) {
    switch (action) {
      case 'DOWNLOAD':
        this.showBottomSheet()
        break
      case 'NEW':
        this.openForm()
        break
    }
  }

  // showBottomSheet(title: string, fileName: string, data: any){
  //   this.bottomSheet.open(DownloadComponent)
  // }
  showBottomSheet() {
    this.bottomSheet.open(DownloadComponent, { data: document.getElementById('table') });
    // open() permite abrir un componente
  }

  showMessage(message: string, duration:number = 5000){
    this.snackBar.open(message, '', {duration})
  }

}
