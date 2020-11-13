import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  coffeeOrders;
  constructor(private firebase: FirebaseService) {}
  ngOnInit() {
    this.getCoffeeOrders();
  }
  getCoffeeOrders = () =>
    this.firebase
      .getCoffeeOrders()
      .subscribe(res => (this.coffeeOrders = res));

  deleteOrder = data => this.firebase.deleteCoffeeOrder(data);

  markCompleted = data => this.firebase.updateCoffeeOrder(data);
}
