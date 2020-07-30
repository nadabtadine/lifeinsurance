import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../simulation.service';
import { ProductService } from 'src/app/products/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountverificationService } from 'src/app/customer/accountverification.service';
import { ShoppingCartService } from 'src/app/customer/shoppingCart/shoppingCart.service';
import { Product } from 'src/app/products/product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from 'src/app/customer/customer.model';
import { map, switchMap, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { SimulationresultComponentDialog } from './simulationresult-dialog.component';

export interface DialogData{
  product: Product;
}

@Component({
  selector: 'app-simulationresult',
  templateUrl: './simulationresult.component.html',
  styleUrls: ['./simulationresult.component.css']
})
export class SimulationresultComponent implements OnInit {
  customer$: BehaviorSubject<Customer> = new BehaviorSubject(null);
  r:number;
  p: Product;
  id:number;
  product: Observable<Product>;
  constructor(private service:SimulationService,
  private productService: ProductService, 
  private route: ActivatedRoute,
  private router: Router,
    private accountVerificationService: AccountverificationService,
    private cartService:ShoppingCartService,
    public dialog: MatDialog,private http: HttpClient){}

  ngOnInit(): void {
    this.r=this.service.data;
    this.customer$ = this.accountVerificationService.current;
    this.product = this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('id')),
        switchMap(productId => this.productService.getProductById(productId)),
        tap(product => this.p = product)
      );
  }

  add():void {
    const dialogRef = this.dialog.open(SimulationresultComponentDialog, {
      width: '250px',
      data: { product: this.p}
    });
 
    dialogRef.afterClosed().subscribe(() => {
    //  if(){
      this.cartService.addProduct(this.p,this.customer$.value.id).subscribe();
    //  }
    });
  }

check(){
  this.customer$ = this.accountVerificationService.current;
  if(this.customer$.value){
    this.router.navigateByUrl("/payment");
  }
  else{
    this.router.navigateByUrl("/signup");
  }
}


}
