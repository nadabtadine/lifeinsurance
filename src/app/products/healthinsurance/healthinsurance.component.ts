import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/products/product.model';
import { ProductService } from 'src/app/products/product.service';
import { tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

// @NgModule({
//   imports: [ CommonModule ]
// })

@Component({
  selector: 'app-healthinsurance',
  templateUrl: './healthinsurance.component.html',
  styleUrls: ['./healthinsurance.component.css']
})
export class HealthinsuranceComponent implements OnInit {
  // products: Observable<Product[]>;
  products:Observable<Product[]>;
  productsSubscription: Subscription;
  // type:number=1;
  constructor(private productService: ProductService) { }


  // ngOnInit() {
  //   this.products = this.productService.getProductsByType(1);
  // }

  ngOnInit(){
    // this.productsSubscription = this.productService.getProductsByType(1)
    //   .subscribe(products => this.products = products);

    this.products = this.productService.getProductsByType(1)
    .pipe(
      tap(products => {
        console.log(products)
      })
    )
  }

  // ngOnDestroy() {
  //   this.productsSubscription.unsubscribe();
  // }

  details(){
 
  }

}
