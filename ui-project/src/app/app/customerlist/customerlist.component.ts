import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css'] ,
  providers: [CustomerService]
})
export class CustomerlistComponent implements OnInit {
  customerList: any[];
  totalItems: any;
  page: any = 1;
  previousPage: any;
  constructor(private custService: CustomerService, private router: Router) { }
  loadPage(current: number) {
    this.custService.getUserList(current).subscribe(
      data => {
        this.customerList = data['rows'].filter(cust => cust);
        this.totalItems = data['total'];
        this.page = data['current'];
      },
       error => {

       }
    );
  }

  ngOnInit() {
    this.custService.getUserList(this.page).subscribe(
      data => {
        this.customerList = data['rows'].filter(cust => cust);
        this.totalItems = data['total'];
        this.page = data['current'];
        console.log( this.totalItems);
      },
       error => {

       }
    );
  }
  deleteCustomer(mobile: any) {
   // alert('deleting customer for mobile ' + mobile);
    this.custService.deleteUser(mobile).subscribe(
      data => {
        this.custService.getUserList(this.page).subscribe(
          data1 => {
            this.customerList = data1['rows'].filter(cust => cust);
            this.totalItems = data1['total'];
            this.page = data1['current'];
            console.log( this.totalItems);
          },
           errors => {
               }
        );
      },
      error => {

      }
    );
  }
  editCustomer(mobile: any) {
   // alert('editing customer for mobile ' + mobile);
   this.router.navigate(['/updateUser', {mobileId: mobile}]);
  }

}
