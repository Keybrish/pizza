import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuServiceDos } from 'src/app/menu/services/menu.service';
import { environment } from 'src/environments/environment';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { Pizzas } from 'src/app/menu/models/menu.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormComponent } from 'src/app/menu/components/form/form.component';

@Component({
  selector: 'pizza-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.css']
})
export class PageMenuComponent implements OnInit {

  // records: any[] = []
  // data: any[] = []
  // totalRecors = this.data.length
  // pizzas: Pizzas = {
  //   name: '',
  //   ingredients: '',
  //   price: 0,
  //   image: ''
  // }
  // pizza = []

  // constructor(private menuService: MenuService, private menuServiceDos: MenuServiceDos) {
  //   this.loadPizzas()
  // }

  // ngOnInit(): void {
  //   // this.menuServiceDos.loadPizzas().subscribe(data => {
  //   //   console.log(data)
  //   //   this.pizza = data
  //   // }, error => {
  //   //   console.log(error)
  //   // })
  // }

  // metaDataColumns: MetaDataColumn[] = [
  //   // { field: "_id", title: "ID" },
  //   { field: "name", title: "PIZZA" },
  //   { field: "ingredients", title: "INGREDIENTES" },
  //   { field: "price", title: "PRECIO" }
  //   // { field: "image", title: "IMAGEN" }
  // ]

  // loadPizzas() {
  //   this.menuServiceDos.loadPizzas().subscribe(data => {
  //     this.records = data
  //     this.totalRecors = this.records.length
  //     console.log(this.totalRecors)
  //     for (let i = 0; i < this.totalRecors; i++) {
  //       this.pizzas.name = this.records[i].name
  //       this.pizzas.ingredients = this.records[i].ingredients
  //       this.pizzas.price = this.records[i].price
  //       this.pizzas.image = this.records[i].image
  //     }
  //     this.changePage(0)
  //   }, error => {
  //     console.log(error)
  //   })
  // }

  // changePage(page: number) {
  //   const pageSize = environment.PAGE_SIZE
  //   const skip = pageSize * page
  //   this.data = this.records.slice(skip, skip + pageSize)
  // }

  search = ''
  searchI = ''
  searchR = ''
  searchMin = ''
  searchMax = ''
  pizzas : any [] = []

  text: string = 'NUEVA PIZZA';
  constructor(private pizzaService: MenuServiceDos, private dialog: MatDialog, private snackBar: MatSnackBar, private authService: AuthService) {
    this.loadPizzas()
  }
  loadPizzas() {
    this.pizzaService.loadPizzas().subscribe(
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
    this.pizzaService.deletePizza(id).subscribe(() => {
      this.loadPizzas();
    });
  }

  loadMenuPizza() {
    this.pizzaService.loadPizzas().subscribe(data => {
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

  loadIngredientes() {
    this.pizzaService.loadPizzas().subscribe(data => {
      this.pizzas = data
      this.records = []
      for (let i = 0; i < this.pizzas.length; i++) {
        if (this.pizzas[i].ingredients.toLowerCase().includes(this.searchI.toLowerCase())) {
          this.records.push(this.pizzas[i])
        }
      }
    }, error => {
      console.log(error)
    })
  }

  loadPrecios() {
    this.pizzaService.loadPizzas().subscribe(data => {
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