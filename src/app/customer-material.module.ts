import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatCardModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule , MatRadioModule, MatCardModule,MatIconModule ]
})
export class CustomMaterialModule { }
