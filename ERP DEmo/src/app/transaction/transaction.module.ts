import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [TransactionListComponent],
  imports: [
    CommonModule, TransactionRoutingModule, MatTableModule
  ]
})
export class TransactionModule { }
