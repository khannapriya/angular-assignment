import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionListComponent } from './transaction-list/transaction-list.component';


const routes: Routes = [
  {
    path:'transactions',
    component:TransactionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
