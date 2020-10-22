import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() sidenavWidthMax: any;
  @Input() sidenavWidthMin: any;
  @Input() items: any;
  sidenavWidth = 4;
  ngStyle: string;
  constructor() {

  }
  ngOnInit(): void {

  }
  increase(): void {
    this.sidenavWidth = this.sidenavWidthMax;
  }
  decrease(): void {
    this.sidenavWidth = this.sidenavWidthMin;
  }
  // sidenavToggle() {
  //   this.ngStyle = 'this.sidenavWidth = 15';
  //   console.log('sidenav width incrases');
  // }
}
