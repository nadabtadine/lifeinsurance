export enum PaymentMethod {
    Creditcard='VisaCard',
    Debitcard='MasterCard',
    Paypal='Paypal'
 }

export class Checkout{

firstname: string;
lastname: string;
username:string;
email: string;
address: string
phone: string;
calculatedPrice:number;
items_number:number;
payment:PaymentMethod;
constructor() {}

    
}