import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FirebaseService } from './services/firebase.service';
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
export class AppComponent implements OnInit {
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

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
      validators: [
        {
          expression: (c) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(c.value),
          message: (error, field: FormlyFieldConfig) => `"${field.formControl.value}" is not a valid email`,
        }
      ],
    },
    {
      key: 'email2',
      type: 'input',
      templateOptions: {
        label: 'Email address 2',
        placeholder: 'Enter email 2',
        required: false,
      }
    }
  ];
  constructor(private firebase: FirebaseService) {}

  ngOnInit() {

  }
  onSubmit() {
    console.log(this.model);
  }
  IpValidator(control: FormControl): ValidationErrors {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(control.value) ? null : { 'email': true };
  }
}
