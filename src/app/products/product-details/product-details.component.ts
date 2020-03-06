import { Component, OnInit,Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { Customer } from 'src/app/customer/customer.model';
import { AccountverificationService } from 'src/app/customer/accountverification.service';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductDetailsComponentDialog } from './product-details-dialog.component';
import { HttpClient } from '@angular/common/http';
import { ShoppingCartService } from 'src/app/customer/shoppingCart/shoppingCart.service';

export interface DialogData{
  product: Product;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Observable<Product>;
  p: Product;
  id:number;
  // productname:string;
  customer$: BehaviorSubject<Customer> = new BehaviorSubject(null);
  private Url = 'http://localhost:9091/api';
  constructor( private productService: ProductService, private route: ActivatedRoute,
    private accountVerificationService: AccountverificationService,
    private cartService:ShoppingCartService,
    public dialog: MatDialog,private http: HttpClient) {

  }

  ngOnInit() {
    this.customer$ = this.accountVerificationService.current;
    this.product = this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('id')),
        switchMap(productId => this.productService.getProductById(productId)),
        tap(product => this.p = product)
      );
  }

   add():void {
    const dialogRef = this.dialog.open(ProductDetailsComponentDialog, {
      width: '250px',
      data: { product: this.p}
    });
 
    dialogRef.afterClosed().subscribe(() => {
      this.cartService.addProduct(this.p,this.customer$.value.id).subscribe();
    });
  }
}
