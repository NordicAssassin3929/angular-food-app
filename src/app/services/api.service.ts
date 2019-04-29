import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, pipe} from "rxjs";
import {Item} from "../interfaces/item";
import {environment} from "../../environments/environment";
import {Order} from "../interfaces/order";
import {MyOrder} from "../interfaces/myorder";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private itemsEndpoint = 'items/';
  private itemEndpoint = 'item/';
  private ordersEndpoint = 'orders/';
  private myorderEndpoint = 'myorder/';
  url = environment.endpoint;

  getItems(): Observable<Item[]> {
    return this.http.get <Item[]>(this.url + this.itemsEndpoint);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get <Order[]>(this.url + this.ordersEndpoint);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get <Item>(this.url + this.itemEndpoint + id);
  }

  getMyOrder(id: number): Observable<MyOrder> {
    return this.http.get <MyOrder>(this.url + this.myorderEndpoint + id);
  }

  addItem(item: Item): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    item.item_id++;
    return this.http.post<any>(this.url + this.itemsEndpoint, item, httpOptions);
  }

  updateItem(item: Item, id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(this.url + this.itemEndpoint + id, item, httpOptions);
  }

  deleteItem(id: number): Observable<Item> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.delete<Item>(this.url + this.itemEndpoint + id, httpOptions);
  }
}
