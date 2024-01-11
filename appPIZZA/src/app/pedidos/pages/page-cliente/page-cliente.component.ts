import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { KeypadButton } from 'src/app/shared/interfaces/keypad.interface';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { FormClienteComponent } from '../../components/form-cliente/form-cliente.component';
import { FormComponent } from '../../components/form/form.component';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'pizza-page-cliente',
  templateUrl: './page-cliente.component.html',
  styleUrls: ['./page-cliente.component.css']
})
export class PageClienteComponent implements OnInit {

  pedidos: any[] = []
  search = ''

  records: any[] = []

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "ID" },
    { field: "name", title: "PEDIDO" },
    { field: "address", title: "DIRECCIÓN" },
    { field: "status", title: "ESTADO" },
    { field: "price", title: "TOTAL" }
  ]

  data: any[] = []
  totalRecors = this.data.length

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

  // loadPedidos() {
  //   this.pedidosService.loadPedidos().subscribe(data => {
  //     this.records = data
  //     console.log(this.records)
  //     this.totalRecors = this.records.length
  //     this.changePage(0)
  //   }, error => {
  //     console.log(error)
  //   })
  // }

  loadPedidos() {
    this.pedidosService.loadPedidos().subscribe(data => {
      this.pedidos = data
      this.records = []
      for (let i = 0; i < this.pedidos.length; i++) {
        if (this.pedidos[i].status === 'P') {
          this.records.push(this.pedidos[i])
        }
      }
      this.totalRecors = this.pedidos.length
      this.changePage(0)
    }, error => {
      console.log(error)
    })
  }

  keypadButtons: KeypadButton[] = [
    // { icon: "arrow_downward", tooltip: "EXPORTAR", color: "accent", action: "DOWNLOAD" },
    { icon: "add", tooltip: "AÑADIR", color: "primary", action: "NEW" }
  ]

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.data = this.records.slice(skip, skip + pageSize)
  }

  openForm(row: any = null) {
    const options = {
      panelClass: 'panel-container', disableClose: true, data: row
    }
    const reference: MatDialogRef<FormClienteComponent> = this.dialog.open(FormClienteComponent, options)
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
