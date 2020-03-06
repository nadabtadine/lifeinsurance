export class Customer{
  shoppingcart(p: import("../products/product.model").Product, shoppingcart: any) {
    throw new Error("Method not implemented.");
  }
    public id:number
    public name:string
    public age:number;
    public gender:string;
    public phone:string;
    public email:string;
    public address:string;
    public username: string;
    public password: string;
    public token?:string;
    public shoppingcartId;number;

    constructor(id:number, name:string){
        id=id;
        name=name;
    }
 
}


