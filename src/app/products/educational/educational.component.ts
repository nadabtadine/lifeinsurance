import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.css']
})
export class EducationalComponent implements OnInit {
  products:Observable<Product[]>;
  productsSubscription: Subscription;
  constructor(private productService: ProductService) { }

  
  ngOnInit(){
    this.products = this.productService.getProductsByType(3);
  }
  details(){}

  // ngOnDestroy() {
  //   this.productsSubscription.unsubscribe();
  // }
}
