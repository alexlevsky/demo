import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

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
  constructor(public firebase: FirebaseService) {}

  ngOnInit() {}

  addCoffee = coffee => this.coffeeOrder.push(coffee);

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
