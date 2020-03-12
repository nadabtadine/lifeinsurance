import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './product-details.component';

@Component({
    selector: 'product-details-dialog',
    templateUrl: 'product-details-dialog.component.html',
  })

  export class  ProductDetailsComponentDialog{
  
    constructor(
      public dialogRef: MatDialogRef<ProductDetailsComponentDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      }
  
  
}

