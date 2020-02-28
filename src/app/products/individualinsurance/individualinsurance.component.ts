import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-individualinsurance',
  templateUrl: './individualinsurance.component.html',
  styleUrls: ['./individualinsurance.component.css']
})
export class IndividualinsuranceComponent implements OnInit {
  products: Observable<Product[]>;
  productsSubscription: Subscription;
  constructor(private productService: ProductService) { }

  ngOnInit(){
   this.products = this.productService.getProductsByType(2);
  }
details(){}

}
