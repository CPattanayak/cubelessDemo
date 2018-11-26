import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ItemModel } from './item.model';
import { QueryModel } from './query.model';
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
  private currentItem: ItemModel;
  private queryModel: QueryModel;
  constructor(private http: HttpClient) { }
  getItemList() {
    return this.http.get(`${this.baseUrl}/api/items`);
  }
  getItemListAdmin() {
    this.queryModel = new QueryModel();
    this.queryModel.size = 10;
    this.queryModel.page = 1;
    return this.http.post<QueryModel>( `/getitem`, this.queryModel, httpOptions);
  }
  createItem(item: ItemModel) {

    // console.log(customer);
      return this.http.post<ItemModel>( `/saveitem`, item, httpOptions);
    }
  updateItem(item: ItemModel) {
    return this.http.post<ItemModel>( `/saveitem`, item, httpOptions);

  }
  deleteItem(itename: any) {
    this.currentItem = new ItemModel();
    this.currentItem.itemName = itename;
    return this.http.post<ItemModel>( `/deleteitem`, this.currentItem, httpOptions);

  }
}
