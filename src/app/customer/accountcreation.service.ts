import { Customer } from './customer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
@Injectable({
    providedIn: 'root'
  })
export class AccountcreationService{
    private Url = 'http://localhost:9098/api';


  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.Url + `/customers`);
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.Url}/customers/${id}`;
    return this.http.get<Customer>(url);
  }

    register(c: Customer):Observable<any> {
        return this.http.post(this.Url + `/insert`, c, httpOptions);
    }
    
    constructor(private http: HttpClient) { }
    
}