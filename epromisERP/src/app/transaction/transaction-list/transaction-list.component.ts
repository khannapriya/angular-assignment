import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface TransactionList {
  AccountCode: string;
  AccountName: string;
  DefaultCurrency: number;
  Address: string;
}

const ELEMENT_DATA: TransactionList[] = [
  {AccountCode: '12366545487', AccountName: 'Prakesh Iyer', DefaultCurrency: 1.0079, Address: 'Dubai , Deira city center'},
  
  {AccountCode: '15626545487', AccountName: 'Rohit Sharma', DefaultCurrency: 122.0079, Address: 'Ajman, UAE'},
  
  { AccountCode: '12366545511', AccountName: 'Mahmood Mufti', DefaultCurrency: 141.0079, Address: 'Abu Dabhi, UAE'},
  { AccountCode: '12366545419', AccountName: 'Arib Mohmaad', DefaultCurrency: 141.0079, Address: 'Abu Dabhi, UAE'},
  { AccountCode: '12366545480', AccountName: 'Yusuf Mufti', DefaultCurrency: 241.0079, Address: 'Bur Dubai, Dubai, UAE'},
  { AccountCode: '12366545471', AccountName: 'Shilpy Bindra', DefaultCurrency: 41.0079, Address: 'Abu Dabhi'},
  { AccountCode: '12366545009', AccountName: 'Ruchika Dhawan', DefaultCurrency:541.0079, Address: 'Al Barsh South,Dubai'},
  
];

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['AccountCode', 'AccountName', 'DefaultCurrency', 'Address'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
