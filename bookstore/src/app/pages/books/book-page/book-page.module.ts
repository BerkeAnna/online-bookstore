import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookPageRoutingModule } from './book-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookPageComponent } from './book-page.component';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';
import { MatFormField, MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


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
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormField,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule
    
    
  ]
})
export class BookPageModule { }
