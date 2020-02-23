import { Component, OnInit, NgModule } from '@angular/core';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@NgModule({
  imports:[CommonModule]
})

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Observable<Product[]>;
  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}