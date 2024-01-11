import { Component, ContentChildren, Input, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { MetaDataColumn } from '../../interfaces/metacolumn.interface';

@Component({
  selector: 'pizza-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: any
  @Input() metaDataColumns!: MetaDataColumn[]
  columns: string[] = []

  @ContentChildren(MatColumnDef, {descendants: true}) columnsDef!: QueryList<MatColumnDef>
  @ViewChild(MatTable, {static: true}) table!: MatTable<any>

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['metaDataColumns']) {
      this.columns = this.metaDataColumns.map((x) => x.field)
    }
  }

  ngAfterContentInit(){
    if(!this.columnsDef){return}
    this.columnsDef.forEach(columnsDef => {
      this.columns.push(columnsDef.name)
      this.table.addColumnDef(columnsDef)
    })
  }

}
