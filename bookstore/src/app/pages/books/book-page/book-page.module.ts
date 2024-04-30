import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookPageRoutingModule } from './book-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookPageComponent } from './book-page.component';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';


@NgModule({
  declarations: [
    BookPageComponent,
    DateFormatPipe 
  ], 
  exports: [
    BookPageComponent,
  ],
  imports: [
    CommonModule,
    BookPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
    
  ]
})
export class BookPageModule { }
