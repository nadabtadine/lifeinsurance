export class Product{
    public id:number
    public name:string;
    public description:string;
    public logo:string;
    public price:number;
    public category:number;
    public image:String;

    constructor(id:number, name:string,description:string,price:number,logo:string,image:String,category:number){
        id=id;
        name=name;
        description=description;   
        price=price;
        logo=logo;
        image=image;
        category=category;
    }
    
}
