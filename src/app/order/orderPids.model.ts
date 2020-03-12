import { Product } from '../products/product.model';

export class OrderPids{
  
    products:Product[] = [];
    totalprice: number; 
    constructor(private p: Product[] = []){
        this.products = p;
    
    }
}