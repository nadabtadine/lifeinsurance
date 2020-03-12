import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from './invoice.model';

@Injectable({
    providedIn: 'root'
  })
  export class InvoiceService{
    private Url = 'http://localhost:9091/api5';
    
    constructor(private http :HttpClient){}

    getInvoices(): Observable<Invoice[]> {
      return this.http.get<Invoice[]>(this.Url + `/invoices`);
    }
    
    getInvoicesById(invoiceId: string): Observable<Invoice> {
      return this.http.get<Invoice>(this.Url + `/invoices/` + invoiceId);
    }
  }