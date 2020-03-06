export class Invoice{
    id: number;
    cid:number;
    pid:number[];
    date:Date;
    totalprice:number;
    discount:number;

    constructor(id:number,cid:number,pid:number[]){
        id=id;
        cid=cid;
        pid=pid;
    }
}

