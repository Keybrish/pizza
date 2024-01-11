import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import * as XLSX from 'xlsx';
import jspdf from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'pizza-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {
  }

  export() {

  }

  exportExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Información MCV.xlsx');
  }

  generatePDF(): any {
    var pdf = new jspdf();
    pdf.setProperties({
      title: 'Listado',
    });
    autoTable(pdf, {
      html: 'table',
    });
    return pdf;
  }

  openPDF() {
    this.generatePDF().output('dataurlnewwindow');
  }

  exportPDF() {
    this.generatePDF().save('información MCV');
  }

  printPDF() {
    var pdf = this.generatePDF();
    pdf.autoPrint();
    pdf.output('dataurlnewwindow');
  }

}
