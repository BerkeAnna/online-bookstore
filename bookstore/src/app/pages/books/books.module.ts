import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { ListComponent } from './list/list.component';
import { ViewerComponent } from './viewer/viewer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from '../../shared/pipes/date-format.pipe';
import { MatFormField, MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    BooksComponent,
    ListComponent,
    ViewerComponent
  ],
  exports: [
    BooksComponent  
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormField,
    MatCardModule
  ]
})
export class BooksModule { }

