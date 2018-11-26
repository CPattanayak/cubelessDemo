import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer.model';
import { QueryModel } from './query.model';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = environment.baseUrl;
  private queryModel: QueryModel;
  private currentCustomer: Customer;
  constructor(private http: HttpClient) { }
  getUserList(id: any) {
    this.queryModel = new QueryModel();
    this.queryModel.size = 10;
    this.queryModel.page = id;
    return this.http.post<QueryModel>( `/getcustomer`, this.queryModel, httpOptions);
  }
  createUser(customer: Customer) {

  // console.log(customer);
    return this.http.post<Customer>( `/savecustomer`, customer, httpOptions);
  }
  deleteUser(mobile: any) {
    this.currentCustomer = new Customer();
    this.currentCustomer.mobile = mobile;
    return this.http.post(`/deletecustomer`, this.currentCustomer, httpOptions);
  }
  updateUser(mobile: any, customer: Customer) {
    return this.http.post<Customer>( `/savecustomer`, customer, httpOptions);
  }

}
