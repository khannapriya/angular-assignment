import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//Material imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import {AccountsModule} from './accounts/accounts.module';
import {TransactionModule} from './transaction/transaction.module';
import { from } from 'rxjs';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material";
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {StarRatingModule} from 'angular-star-rating';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatFormFieldControl} from '@angular/material';
import { MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';
import { StarsComponent } from './shared/components/stars/stars.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainNavComponent,
    StarRatingComponent,
    StarsComponent,
    LoginComponent,
    HomeComponent,
    
    // CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,
    MatButtonModule, MatCheckboxModule,MatIconModule,MatSidenavModule,
    AccountsModule,TransactionModule, LayoutModule, MatToolbarModule, MatListModule,MatMenuModule,MatDatepickerModule,
    MatTreeModule, StarRatingModule.forRoot(),MatNativeDateModule,MatFormFieldModule,MatInputModule,MatTooltipModule,
    MatSelectModule,MatPaginatorModule,MatStepperModule, MatGridListModule, MatCardModule

  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
