import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { KeypadButton } from 'src/app/shared/interfaces/keypad.interface';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { FormComponent } from '../../components/form/form.component';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'pizza-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  pedidos: any[] = []
  search = ''

  records: any[] = [
    { _id: 1, name: 'Mr. Pizza', price: '$' + 12.50 },
    { _id: 2, name: 'Pizza Americana', price: '$' + 10.50 },
    { _id: 3, name: 'Pizza Extravagante', price: '$' + 8.50 },
    { _id: 4, name: 'Pizza 4 Estaciones', price: '$' + 14.50 },
    { _id: 5, name: 'Pizza Diabólica', price: '$' + 11.50 },
    { _id: 6, name: 'Mr. Pizza', price: '$' + 12.50 },
    { _id: 7, name: 'Pizza Americana', price: '$' + 10.50 },
    { _id: 8, name: 'Pizza Extravagante', price: '$' + 8.50 },
    { _id: 9, name: 'Pizza 4 Estaciones', price: '$' + 14.50 },
    { _id: 10, name: 'Pizza Diabólica', price: '$' + 11.50 },
    { _id: 11, name: 'Mr. Pizza', price: '$' + 12.50 },
    { _id: 12, name: 'Pizza Americana', price: '$' + 10.50 },
    { _id: 13, name: 'Pizza Extravagante', price: '$' + 8.50 },
    { _id: 14, name: 'Pizza 4 Estaciones', price: '$' + 14.50 },
    { _id: 15, name: 'Pizza Diabólica', price: '$' + 11.50 },
    { _id: 16, name: 'Mr. Pizza', price: 12.50 },
    { _id: 17, name: 'Pizza Americana', price: 10.50 },
    { _id: 18, name: 'Pizza Extravagante', price: 8.50 },
    { _id: 19, name: 'Pizza 4 Estaciones', price: 14.50 },
    { _id: 20, name: 'Pizza Diabólica', price: 11.50 },
    { _id: 21, name: 'Mr. Pizza', price: 12.50 },
    { _id: 22, name: 'Pizza Americana', price: 10.50 },
    { _id: 23, name: 'Pizza Extravagante', price: 8.50 },
    { _id: 24, name: 'Pizza 4 Estaciones', price: 14.50 },
    { _id: 25, name: 'Pizza Diabólica', price: 11.50 }
  ]

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "ID" },
    { field: "name", title: "PEDIDO" },
    { field: "price", title: "TOTAL" }
  ]

  data: any[] = []
  totalRecors = this.data.length

  keypadButtons: KeypadButton[] = [
    { icon: "arrow_downward", tooltip: "EXPORTAR", color: "accent", action: "DOWNLOAD" },
    // { icon: "add", tooltip: "AÑADIR", color: "primary", action: "NEW" }
  ]

  constructor(private bottomSheet: MatBottomSheet, private pedidosService: PedidoService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.loadPedidos()
  }

  ngOnInit(): void {
  }

  // loadPizzas(){
  //   this.data = this.records
  //   this.totalRecors = this.records.length
  //   this.changePage(0)
  // }

  loadPedidos() {
    this.pedidosService.loadPedidos().subscribe(data => {
      this.records = data
      this.pedidos = []
      for (let i = 0; i < this.records.length; i++) {
        if (this.records[i].status === 'P') {
          this.pedidos.push(this.records[i])
        }
      }
      this.totalRecors = this.pedidos.length
      this.changePage(0)
    }, error => {
      console.log(error)
    })
  }

  loadPedidosPizza() {
    this.pedidosService.loadPedidos().subscribe(data => {
      this.records = data
      this.pedidos = []
      for (let i = 0; i < this.records.length; i++) {
        if (this.records[i].name.toLowerCase().includes(this.search.toLowerCase())) {
          this.pedidos.push(this.records[i])
        }
      }
      this.totalRecors = this.pedidos.length
      this.changePage(0)
    }, error => {
      console.log(error)
    })
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.data = this.pedidos.slice(skip, skip + pageSize)
  }

  openForm(row: any = null) {
    const options = {
      panelClass: 'panel-container', disableClose: true, data: row
    }
    const reference: MatDialogRef<FormComponent> = this.dialog.open(FormComponent, options)
    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return
      }
      if (response.id) {
        const pizza = { ...response }
        this.pedidosService.updatePedidos(response.id, pizza).subscribe(() => {
          this.loadPedidos()
          this.showMessage('Registro actualizado.')
        })
      } else {
        const pizza = { ...response }
        this.pedidosService.addPedidos(pizza).subscribe(() => {
          this.loadPedidos()
          this.showMessage('Registro exitoso.')
        })
      }
    })
  }

  delete(id: any) {
    this.pedidosService.deletePedidos(id).subscribe(() => {
      this.loadPedidos()
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

  showMessage(message: string, duration: number = 5000) {
    this.snackBar.open(message, '', { duration })
  }
}
