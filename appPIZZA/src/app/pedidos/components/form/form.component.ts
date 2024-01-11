import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'pizza-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = ""
  status = 'E'
  group!: FormGroup

  constructor(private reference: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data ? "PEDIDO" : "NUEVO"
  }

  ngOnInit(): void {
    this.loadForm()
  }

  // loadForm(){
  //   this.group = new FormGroup({
  //     id: new FormControl(this.data?._id),
  //     name: new FormControl(this.data?.name, Validators.required),
  //     price: new FormControl(this.data?.price, Validators.required),
  //   })
  // }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?._id),
      name: new FormControl(this.data?.name),
      price: new FormControl(this.data?.price),
      status: new FormControl('ENTREGADO')
    })
  }

  save() {
    const record = this.group.value
    this.reference.close(record)
  }

  // delivered(id: any) {
  //   this.pedidosService.deletePedidos(id).subscribe(() => {
  //     this.loadPedidos()
  //     this.showMessage('Eliminación exitosas.')
  //   })
  // }

}
