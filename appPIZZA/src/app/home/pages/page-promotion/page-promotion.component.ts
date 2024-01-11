import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/core/services/auth.service';
import { MenuServiceDos } from 'src/app/menu/services/menu.service';
import { PromocionService } from 'src/app/promociones/services/promocion.service';

@Component({
  selector: 'pizza-page-promotion',
  templateUrl: './page-promotion.component.html',
  styleUrls: ['./page-promotion.component.css']
})
export class PagePromotionComponent implements OnInit {

  search = ''
  searchI = ''
  searchR = ''
  searchMin = ''
  searchMax = ''
  pizzas : any [] = []

  text: string = 'NUEVA PIZZA';
  constructor(private pizzaService: PromocionService, private dialog: MatDialog, private snackBar: MatSnackBar, private authService: AuthService) {
    this.loadPizzas()
  }
  loadPizzas() {
    this.pizzaService.loadPromociones().subscribe(
      (data) => {
        this.records = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  records: any[] = [];
  ngOnInit(): void { }
  delete(id: any = null) {
    this.pizzaService.deletePromocion(id).subscribe(() => {
      this.loadPizzas();
    });
  }

  loadMenuPizza() {
    this.pizzaService.loadPromociones().subscribe(data => {
      this.pizzas = data
      this.records = []
      for (let i = 0; i < this.pizzas.length; i++) {
        if (this.pizzas[i].name.toLowerCase().includes(this.search.toLowerCase())) {
          this.records.push(this.pizzas[i])
        }
      }
    }, error => {
      console.log(error)
    })
  }

  loadDays() {
    this.pizzaService.loadPromociones().subscribe(data => {
      this.pizzas = data
      this.records = []
      for (let i = 0; i < this.pizzas.length; i++) {
        if (this.pizzas[i].day.toLowerCase().includes(this.searchI.toLowerCase())) {
          this.records.push(this.pizzas[i])
        }
      }
    }, error => {
      console.log(error)
    })
  }

  loadPrecios() {
    this.pizzaService.loadPromociones().subscribe(data => {
      this.pizzas = data
      this.records = []
      for (let i = 0; i < this.pizzas.length; i++) {
        if (this.pizzas[i].price <= this.searchMax && this.pizzas[i].price >= this.searchMin) {
          this.records.push(this.pizzas[i])
        }
      }
    }, error => {
      console.log(error)
    })
  }

}
