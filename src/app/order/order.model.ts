import { Product } from '../products/product.model';
import { OrderInfo } from './orderInfo.model';

export class Order{
    id:number;
    cid:number;
    orderDetails:OrderInfo;
    // firstname:String;
    // lastname:String;
    // email:String;
    // address:String;
    // phone:String;
    date:Date;
    totalPrice:number;

    constructor(){
    }

    
}