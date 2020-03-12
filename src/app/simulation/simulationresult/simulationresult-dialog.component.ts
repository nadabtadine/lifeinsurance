import { Component, Inject } from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './simulationresult.component';

@Component({
    selector: 'simulationresult-dialog',
    templateUrl: 'simulationresult-dialog.component.html',
  })

  export class  SimulationresultComponentDialog{
  
    constructor(
      public dialogRef: MatDialogRef<SimulationresultComponentDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      }
  
  
}

