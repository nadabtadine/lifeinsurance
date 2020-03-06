import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShoppingCartService{
  
 
    private Url = 'http://localhost:9091/api';
    constructor(private http: HttpClient) {
    }
    private addHeaders() {

        // this.headers = new Headers({
        //     'Content-Type': 'application/json',
        //     'Authorization': 'Bearer ' + localStorage.getItem('token')
        // });
        // this.options = new RequestOptions({ headers: this.headers });
    }

    getShoppingCart(cid:number): Observable<Product[]> {
       return this.http.get<Product[]>(this.Url+ `/shoppingcart/` +cid);
    }

    addProduct(p, cid):Observable<any> {
        return this.http.post(this.Url +`/shoppingcart/` +cid , p);
    }

    // delete(pid) {
    
    // }

}