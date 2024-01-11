import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'pizza-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  title = ""
  status = 'E'
  group!: FormGroup

  constructor(private reference: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data ? "PEDIDO" : "NUEVO"
  }

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?._id),
      name: new FormControl(this.data?.name),
      price: new FormControl(this.data?.price),
      address: new FormControl(this.data?.address),
      status: new FormControl('P')
    })
  }

  save() {
    const record = this.group.value
    this.reference.close(record)
  }

}
