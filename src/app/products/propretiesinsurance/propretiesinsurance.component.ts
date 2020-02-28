import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-propretiesinsurance',
  templateUrl: './propretiesinsurance.component.html',
  styleUrls: ['./propretiesinsurance.component.css']
})
export class PropretiesinsuranceComponent implements OnInit {
  products:Observable<Product[]>;
  productsSubscription: Subscription;
  constructor(private productService: ProductService) { }

 
  ngOnInit(){
    this.products = this.productService.getProductsByType(4);
  }
details(){}
}
