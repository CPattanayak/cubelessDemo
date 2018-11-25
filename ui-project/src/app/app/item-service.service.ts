import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ItemModel } from './item.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getItemList() {
    return this.http.get(`${this.baseUrl}/api/items`);
  }
  getItemListAdmin() {
    return this.http.get(`${this.baseUrl}/api/item/list`);
  }
  createItem(item: ItemModel) {

    // console.log(customer);
      return this.http.post<ItemModel>(`${this.baseUrl}` + `/api/item`, item, httpOptions);
    }
  updateItem(item: ItemModel) {
    return this.http.put<ItemModel>(`${this.baseUrl}` + `/api/item/update`, item, httpOptions);

  }
  deleteItem(itename: any) {
    return this.http.delete(`${this.baseUrl}` + `/api/item/delete/` + `${itename}`);
  }
}
