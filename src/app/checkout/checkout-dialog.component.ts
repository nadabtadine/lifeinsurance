import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './checkout.component';
import { Router } from '@angular/router';
import { AccountverificationService } from '../customer/accountverification.service';

@Component({
    selector: 'checkout-dialog',
    templateUrl: 'checkout-dialog.component.html',
  })

  export class  CheckoutComponentDialog{
  
    cid: number;
    constructor( private router: Router,
      private accountverificationService: AccountverificationService,
      public dialogRef: MatDialogRef<CheckoutComponentDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      }
  
      back(){
        this.dialogRef.close();
        this.cid = this.accountverificationService.current.value.id;
        this.router.navigateByUrl("/shoppingcart/" + this.cid);
      }
}

