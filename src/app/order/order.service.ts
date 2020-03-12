import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrderItem } from './orderItem.model';
import { Order } from './order.model';
import { OrderInfo } from './orderInfo.model';
import { OrderRequest } from './orderRequest.model';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
  })
  export class OrderService{
    private Url = 'http://localhost:9091/api6';
    private headers = new Headers;
    private options = new RequestOptions;
  
    constructor(private http :HttpClient){}

  add(cid,request:OrderRequest):Observable<any> {
      return this.http.post(this.Url + `/order/`+cid,request);
  }
}
