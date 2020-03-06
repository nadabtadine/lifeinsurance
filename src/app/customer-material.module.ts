import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatRadioModule, MatRadioGroup, MatRadioButton} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({

  imports: [
    MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatCardModule,MatDialogModule],
  exports: [MatButtonModule,MatFormFieldModule, MatInputModule , MatRadioModule, MatCardModule,MatIconModule,MatDialogModule ]
})

export class CustomMaterialModule { 


}
