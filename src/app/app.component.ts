import { Component } from '@angular/core';
interface FoodNode {
  name: string;
  icon: string;
  children?: FoodNode[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  items: FoodNode[] = [
    {
      name: 'Fruit',
      icon: 'account_circle',
      children: [
        {name: 'Apple', icon: 'anchor'},
        {name: 'Banana', icon: 'card_travel'},
        {name: 'Fruit loops', icon: 'code'},
      ]
    }, {
      name: 'Vegetables',
      icon: 'commute',
      children: [
        {
          name: 'Green',
          icon: 'code',
          children: [
            {name: 'Broccoli', icon: 'done_all'},
            {name: 'Brussels sprouts', icon: 'class'},
          ]
        }, {
          name: 'Orange',
          icon: 'date_range',
          children: [
            {name: 'Pumpkins', icon: 'favorite'},
            {name: 'Carrots', icon: 'language'},
          ]
        },
      ]
    },
  ];
}
