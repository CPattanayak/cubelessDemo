import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer.model';
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
  constructor(private http: HttpClient) { }
  getUserList(id: any) {
    return this.http.get(`${this.baseUrl}/list/${id}`);
  }
  createUser(customer: Customer) {

  // console.log(customer);
    return this.http.post<Customer>( `/savecustomer`, customer, httpOptions);
  }
  deleteUser(mobile: any) {
    return this.http.delete(`${this.baseUrl}/delete/${mobile}`);
  }
  updateUser(mobile: any, customer: Customer) {
    return this.http.post<Customer>( `/savecustomer`, customer, httpOptions);
  }

}
