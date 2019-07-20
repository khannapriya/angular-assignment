import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { ReceivableMasterComponent } from './receivable-master/receivable-master.component';
import { PayableMasterComponent } from './payable-master/payable-master.component';
import { AccountsComponent } from './accounts/accounts.component';
import {FormsModule,ReactiveFormsModule  } from '@angular/forms';

import {StarRatingModule} from 'angular-star-rating';
//material components
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule,MatFormFieldControl } from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {AgmCoreModule} from '@agm/core';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [ReceivableMasterComponent, PayableMasterComponent, AccountsComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MatTabsModule,MatCardModule, StarRatingModule.forRoot(),MatTreeModule,
    MatIconModule,MatFormFieldModule,MatInputModule,MatButtonModule,FormsModule,ReactiveFormsModule,MatStepperModule,MatTableModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBWRfeDsV2f24uNbIj0hAvesTP7GB6dY8Q'
    }),
  ]
})
export class AccountsModule { }
