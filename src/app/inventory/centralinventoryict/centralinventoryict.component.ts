import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-centralinventoryict',
  templateUrl: './centralinventoryict.component.html',
  styleUrls: ['./centralinventoryict.component.css']
})
export class CentralinventoryictComponent implements OnInit {

  ngOnInit(): void {
    
  }
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  productDialog = false;
  addProductForm: FormGroup<any>;
  editProduct(_t122: any) {
    throw new Error('Method not implemented.');
  }
  products: any[];
  logout() {
    throw new Error('Method not implemented.');
  }
  openNew() {
    this.productDialog = true;
  }
  getPcode(arg0: any) {
    throw new Error('Method not implemented.');
  }
  selectedProducts: any;
  pcodeList: any[];
  selectedCode: any;
  deleteSelectedProducts() {
    throw new Error('Method not implemented.');
  }
  hideDialog() {
  
  }

  //is this correct
  f: any;
  submitted: any;

}
