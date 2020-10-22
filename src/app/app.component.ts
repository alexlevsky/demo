import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  items = [
    { icon: 'person', name: 'About' },
    { icon: 'settings', name: 'Services' },
    { icon: 'local_phone', name: 'Contact' }
  ];
}
