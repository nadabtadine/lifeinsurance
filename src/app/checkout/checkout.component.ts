import { Component, OnInit } from '@angular/core';
import { Checkout } from './checkout.model';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../customer/shoppingCart/shoppingCart.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../products/product.model';
import { AccountverificationService } from '../customer/accountverification.service';
import { Customer } from '../customer/customer.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CheckoutComponentDialog } from './checkout-dialog.component';
import { OrderService } from '../order/order.service';
import { NgForm } from '@angular/forms';
import { OrderItem } from '../order/orderItem.model';
import { Order } from '../order/order.model';
import { OrderInfo } from '../order/orderInfo.model';
import { OrderPids } from '../order/orderPids.model';
import { OrderRequest } from '../order/orderRequest.model';


export interface DialogData{
  message:string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkout: Checkout;
  cartProducts:Product[] = [];
  cid: number;
  pid:number;
  location:Location;
  total:number;
  // orderItem:OrderItem;
  orderInfo: OrderInfo;
  orderPids: OrderPids;
  
  orderRequest:OrderRequest;
  // order:Order;
  customer$: BehaviorSubject<Customer> = new BehaviorSubject(null);
  constructor(private router: Router,
  private cartService: ShoppingCartService,
  private accountverificationService: AccountverificationService,
  public dialog: MatDialog, 
  private orderService: OrderService) {

    this.orderPids = new OrderPids();
    this.orderInfo= new OrderInfo();
    this.orderRequest= new OrderRequest();
    this.checkout = new Checkout();

   }

  ngOnInit(): void {
    this.customer$ = this.accountverificationService.current;
    if (this.customer$.value) {
      this.cartService.getShoppingCart(this.customer$.value.id)
      .subscribe(cartProducts => {
        this.cartProducts = cartProducts;
    });
  }

}


 Sum(){
    var total = 0;
    for(var i = 0; i < this.cartProducts.length; i++){
      total += this.cartProducts[i].price;
    }
    return total;
}

proceed(form:NgForm):void {
  const dialogRef = this.dialog.open(CheckoutComponentDialog, {
    width: '250px',
  });
  dialogRef.afterClosed().subscribe(() => {
  //send request containing cid, order infos and order items
  this.customer$ = this.accountverificationService.current;
  this.orderInfo=form.value;
  this.orderPids.products=this.cartProducts;
  // this.orderPids.totalprice= this.total;
  this.orderRequest.infos=this.orderInfo;
  this.orderRequest.items=this.orderPids;
  this.orderService.add(this.customer$.value.id,this.orderRequest).subscribe(
    response => {
    this.router.navigateByUrl("/order/"+response);
    });
  });
 }
}
