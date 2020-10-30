import {Component, Input, OnInit} from '@angular/core';
import {ArrayDataSource} from '@angular/cdk/collections';
import {NestedTreeControl} from '@angular/cdk/tree';


interface FoodNode {
  name: string;
  icon: string;
  children?: FoodNode[];
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() sidenavWidthMax: any;
  @Input() sidenavWidthMin: any;
  @Input() items: any;
  @Input() iconColor: any;
  @Input() iconBackgroundColor: any;
  sidenavWidth = 4;
  treeControl;
  dataSource;
  hasChild;
  ngStyle: string;
  constructor() {

  }
  ngOnInit(): void {
    this.treeControl = new NestedTreeControl<FoodNode> (node => node.children);
    this.dataSource = new ArrayDataSource(this.items);
    this.hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  }
  increase(): void {
    this.sidenavWidth = this.sidenavWidthMax;
  }
  decrease(): void {
    this.sidenavWidth = this.sidenavWidthMin;
  }
}
