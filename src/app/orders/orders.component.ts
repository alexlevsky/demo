import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import * as BookActions from '../books/actions';
import { Store } from '@ngrx/store';
import { RootStoreModule } from '../books/root-store.module';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  coffees = [
    'Americano',
    'Flat White',
    'Cappuccino',
    'Latte',
    'Espresso',
    'Machiato',
    'Mocha',
    'Hot Chocolate',
    'Tea'
  ];

  coffeeOrder = [];
  constructor(public firebase: FirebaseService, public store$: Store<RootStoreModule>) {}

  ngOnInit() {}

  addCoffee = coffee => {
    this.coffeeOrder.push(coffee);
    this.store$.dispatch(BookActions.BooksApiActions.createBook({ name: this.firebase.form.value.customerName }));
   };

  removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) {
      this.coffeeOrder.splice(index, 1);
    }
  };

  onSubmit() {
    this.firebase.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.firebase.form.value;
    this.firebase.createCoffeeOrder(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
    });
  }
}
