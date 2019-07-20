import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PayableMasterComponent} from './payable-master/payable-master.component';

import { from } from 'rxjs';
import { ReceivableMasterComponent } from './receivable-master/receivable-master.component';
import { AccountsModule } from './accounts.module';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  {
  path: '',
  children: [
    {
      path: 'payable-master',
      component: PayableMasterComponent,
      pathMatch: 'prefix',
    },
    {
      path:'receivable-master',
      component:ReceivableMasterComponent
    } 
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
