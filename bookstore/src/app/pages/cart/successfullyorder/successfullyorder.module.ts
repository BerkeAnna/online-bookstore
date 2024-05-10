import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessfullyorderRoutingModule } from './successfullyorder-routing.module';
import { SuccessfullyorderComponent } from './successfullyorder.component';


@NgModule({
  declarations: [
    SuccessfullyorderComponent
  ],
  imports: [
    CommonModule,
    SuccessfullyorderRoutingModule
  ]
})
export class SuccessfullyorderModule { }
