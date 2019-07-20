import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountsRoutingModule} from './accounts/accounts-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PayableMasterComponent } from './accounts/payable-master/payable-master.component';
import { AccountsComponent } from './accounts/accounts/accounts.component';
import { ReceivableMasterComponent } from './accounts/receivable-master/receivable-master.component';
import { TransactionModule } from './transaction/transaction.module';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/login",
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  {
    path:'accounts',
    loadChildren:'./accounts/accounts.module#AccountsModule'
  },
  {
    path:'payable-master',
    // loadChildren:'./accounts/accounts.module#AccountsModule'
    component:PayableMasterComponent
  },
  {
    path:'transaction',
    // loadChildren:'./transaction/transaction.module#TransactionModule'
    component:HomeComponent,
    children:[
      {
        path:'',
        // component:TransactionListComponent,
        loadChildren:'./transaction/transaction.module#TransactionModule'
      }
    ]
 },
  {
    path:'receivable-master',
    component:HomeComponent,
    children:[
      {
        path:'',
        component:ReceivableMasterComponent
      }
    ]
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  
  },
  {
    path:'accounts',
   component: HomeComponent,
   children: [
     { path: '', component: AccountsComponent }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AccountsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
