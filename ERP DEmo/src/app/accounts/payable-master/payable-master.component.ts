import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { FormGroup, FormBuilder,Validators ,FormControl} from '@angular/forms';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Debtors Control A/C',
    children: [
      {name: 'General'},
      {name: 'Company'},
      {name: 'Credit Limit'},
      {name: 'Documents'},
      {name: 'Contact Details'},
      {name: 'Reference'},
      {name: 'Forwarder'},
      {name: 'Part Code'},
      {name: 'Checklist'},
      {name: 'Guarantee Received'},
      {name: 'Customer site'},
      {name: 'Terms'},
      {name : 'Message'},
      {
        name: 'Reports',
        children: [
          {name: 'Message'},
          {name: 'Statement'},
          {name: 'Ageing'},
          {name: 'Sales Report'},
          {name: 'Sales Order Status'},
          {name: 'Sales Order Analysis'},
          {name: 'Sales Quotation Analysis'}
          
    ]
  }, 
]
  }
]

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  ];
@Component({
  selector: 'app-payable-master',
  templateUrl: './payable-master.component.html',
  styleUrls: ['./payable-master.component.scss']
})
export class PayableMasterComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  
  constructor(private fb: FormBuilder) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  // Main Form
   payableForm = this.fb.group({
    accountCode: ['', Validators.required],
    dCurreny: ['', Validators.required],
    dCurrenyVal: ['', Validators.required],
    accountName: ['', Validators.required],
    arabicName: ['', Validators.required],
  });
  payableForm2 = this.fb.group({
    address: ['', Validators.required],
    sAddress: ['', Validators.required],
    VAT_no: ['', Validators.required],
    VAT_applicable: ['', Validators.required],
    region: ['', Validators.required],
  });

  // Mail send histroy tab;
  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required]
  });
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required]
  });
//call crm tab
  userFormGroup = this.fb.group({
    fullNameCtrl: ['', Validators.required]
  });
  numberFormGroup = this.fb.group({
    numberCtrl: ['', Validators.required]
  });
  title: string = 'ePromise';
 
  lat: number = 25.0657;
  lng: number = 55.17128;
  
  //Data table
  displayedColumns = ['DocumentName', 'Description', 'Document', 'IssueDate' , 'ExpiryDate'];
  dataSource1 = ELEMENT_DATA;
  ngOnit(){
  }
  
}
