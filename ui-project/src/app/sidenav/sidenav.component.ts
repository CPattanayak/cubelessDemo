import { Component, OnInit } from '@angular/core';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'newuser', title: 'NewUser',  icon: 'dashboard', class: '' },
  { path: 'customerList', title: 'CustomerList',  icon: 'dashboard', class: '' },
  { path: 'itemList', title: 'Items',  icon: 'dashboard', class: '' },
  { path: 'loadImage', title: 'loadPhoto',  icon: 'dashboard', class: '' },
  { path: 'createItem', title: 'CreateItem',  icon: 'dashboard', class: '' },
  { path: 'itemAdmin', title: 'ItemAdminList',  icon: 'dashboard', class: '' }

];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
