import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessfullyorderComponent } from './successfullyorder.component';

const routes: Routes = [{ path: '', component: SuccessfullyorderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessfullyorderRoutingModule { }
