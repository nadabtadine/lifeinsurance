import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { AuthGuardService } from 'src/app/customer/auth-guard.service';
import { Customer } from 'src/app/customer/customer.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Observable<Product>;
  id:number;
  au:boolean;

  constructor(private auth: AuthGuardService, private productService: ProductService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.product = this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('id')),
        switchMap(productId => this.productService.getProductById(productId))
      );
  }

isLogged(){
//  if (this.auth.canActivate){
//    this.au==true;
//  }
//  else{this.au==false;}
}


}
