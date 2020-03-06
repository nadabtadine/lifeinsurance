import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from './shoppingCart.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/product.model';
import { Customer } from '../customer.model';
import { AccountverificationService } from '../accountverification.service';
@Component({
  selector: 'app-shoppingCart',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css']
})
export class ShoppingCartComponent implements OnInit {
 
  cartProducts: Observable<Product[]>;
  cid: number;
  
  constructor(private cartService: ShoppingCartService,
      private accountverificationService: AccountverificationService) { }

  ngOnInit() {
    this.cid = this.accountverificationService.current.value.id;
    this.cartProducts= this.cartService.getShoppingCart(this.cid);
  }


}
