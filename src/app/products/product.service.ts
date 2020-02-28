import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductService{
 
private Url = 'http://localhost:9095/api2';

constructor(private http :HttpClient){}

getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.Url + `/products`);
}

getProductById(productId: string): Observable<Product> {
  return this.http.get<Product>(this.Url + `/products/` + productId);
}

getProductsByType(productype:number):Observable<Product[]>{
    return this.http.get<Product[]>(this.Url + `/products/type/` + productype);
  }
}