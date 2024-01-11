import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pizza-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>
  @Input() length!: number
  pageSize = environment.PAGE_SIZE
  currentPage = 0

  constructor(private paginator: MatPaginatorIntl) {
    this.paginator.itemsPerPageLabel = "Registros por página"
    this.paginator.firstPageLabel = "Primera página"
    this.paginator.nextPageLabel = "Siguiente página"
    this.paginator.lastPageLabel = "Última página"
    this.paginator.previousPageLabel = "Página previa"
  }

  ngOnInit(): void {
  }

  changePage(event: any) {
    this.currentPage = event.pageIndex ?? event.value
    this.onChangePage.emit(this.currentPage)
  }

}
