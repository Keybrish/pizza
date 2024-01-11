import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/core/services/auth.service';
import { MenuServiceDos } from 'src/app/menu/services/menu.service';
import { PedidoService } from 'src/app/pedidos/services/pedido.service';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { FormClienteComponent } from '../../components/form-cliente/form-cliente.component';
import { PromocionService } from '../../services/promocion.service';

@Component({
  selector: 'pizza-page-cliente-promocion',
  templateUrl: './page-cliente-promocion.component.html',
  styleUrls: ['./page-cliente-promocion.component.css']
})
export class PageClientePromocionComponent implements OnInit {

  records: any[] = []
  pedidos: any[] = []

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "ID" },
    { field: "name", title: "PIZZA" },
    // { field: "day", title: "DÍA" },
    { field: "price", title: "PRECIO" },
  ]

  data: any[] = []
  totalRecors = this.data.length

  constructor(private bottomSheet: MatBottomSheet, private pedidoService: PedidoService, private promocionService: PromocionService, private pizzasService: MenuServiceDos, private dialog: MatDialog, private snackBar: MatSnackBar, private authService: AuthService) {
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


  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.data = this.records.slice(skip, skip + pageSize)
  }

  // openForm(row: any = null) {
  //   const options = {
  //     panelClass: 'panel-container', disableClose: true, data: row
  //   }
  //   const reference: MatDialogRef<FormClienteComponent> = this.dialog.open(FormClienteComponent, options)
  //   reference.afterClosed().subscribe((response) => {
  //     if(!response){
  //       return
  //     }
  //     if(response.id){
  //       const pizza = {...response}
  //       this.pizzasService.updatePizza(response.id, pizza).subscribe(() => {
  //         this.loadPromociones()
  //         this.showMessage('Registro actualizado.')
  //       })
  //     } else {
  //       const pizza = {...response}
  //       this.pizzasService.addPizza(pizza).subscribe(() => {
  //         this.loadPromociones()
  //         this.showMessage('Registro exitoso.')
  //       })
  //     }
  //   })
  // }

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
        this.pedidoService.addPedidos(pizza).subscribe(() => {
          // this.pedidoService.loadPedidos()
          this.showMessage('Pedido agregado.')
        })
      }
    })
  }

  delete(id: any) {
    this.pedidoService.deletePedidos(id).subscribe(() => {
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

  showMessage(message: string, duration: number = 5000) {
    this.snackBar.open(message, '', { duration })
  }

}
