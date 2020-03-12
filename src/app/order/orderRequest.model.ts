import { OrderInfo } from './orderInfo.model';
import { OrderItem } from './orderItem.model';
import { OrderPids } from './orderPids.model';

export class OrderRequest{
    
    infos:OrderInfo;
    items:OrderPids;

    constructor(){
    
    }
}