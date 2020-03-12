import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from './shoppingCart.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/product.model';
import { Customer } from '../customer.model';
import { AccountverificationService } from '../accountverification.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shoppingCart',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css']
})
export class ShoppingCartComponent implements OnInit {
 
  cartProducts: Observable<Product[]>;
  cid: number;
  pid:number;

  constructor(private cartService: ShoppingCartService,
  private router: Router,
  private accountverificationService: AccountverificationService) { }

  ngOnInit() {
    this.cid = this.accountverificationService.current.value.id;
    this.cartProducts= this.cartService.getShoppingCart(this.cid);
  }

  delete(cid,pid){
    this.cartService.delete(cid,pid).subscribe( 
      () => this.router.navigateByUrl("/shoppingcart/"+ cid));
  }
}
