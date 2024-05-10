import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';

const routes: Routes = [
  {
    path: '', component: CartComponent
  },
 /* {
    path: 'successful', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) 
  },*/
  { path: 'successful', loadChildren: () => import('./successfullyorder/successfullyorder.module').then(m => m.SuccessfullyorderModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
