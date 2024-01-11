import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pizza-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name!: string
  @Input() ingredients!: string
  @Input() price!: number
  @Input() image!: string
  @Input() day!: string

  constructor() { }

  ngOnInit(): void {
  }

}
