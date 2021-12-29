import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ItemModel } from 'src/app/model/itemModel';
import { CustomerService } from 'src/app/services/customer.service';
import { InvoiceDataService } from 'src/app/services/invoiceData.service';
import { ItemService } from 'src/app/services/item.service';
import { LoginService } from 'src/app/services/login.service';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent{

  customers = [
    {
      name: "Jake",
      email: "jake1@email.com",
      address: "101 State Palace , New York",
      mobile: "9876895743"
    },
    {
      name: "John",
      email: "john1@email.com",
      address: "101 State Palace , New York",
      mobile: "9876895743"
    },
    {
      name: "Kate",
      email: "kate1@email.com",
      address: "101 State Palace , New York",
      mobile: "9876895743"
    }];
  selectedCustomer = {
    name: "",
    email: "",
    address: "",
    mobile: ""
  };
  user :any;
  billDate:Date = new Date();
  billDueDate:Date = new Date();
  selectedStatus = "";
  tax=0;
  discount=0;
  totalAmount = this.itemService.getTotalAmount();
  finalAmount = (this.totalAmount*(1+this.tax*0.01))*(1-this.discount*0.01);
  
  dataSource = new MatTableDataSource<ItemModel>([]);
  constructor(public dialog: MatDialog,
    private itemService: ItemService,
    private invoiceDataService:InvoiceDataService,
    private loginService:LoginService,
    private customerService:CustomerService) { 
      this.user = this.loginService.getUser();
      this.loadCustomers();
    }
  ngOnInit(): void {
    let subscription = this.itemService.itemSubject.subscribe(
      (items: ItemModel[]) => {
        this.dataSource.data = items;
        this.changeInput();
        this.totalAmount = this.itemService.getTotalAmount();
      }
    );
  }

  loadCustomers(){
    this.customerService.getCustomer().subscribe(
      (res:any)=>{
        this.customers = res.customerList
        console.log(this.customers);
      }
    )
  }


  displayedColumns = ["Item", "Quantity", "Price", "Amount", "Delete"];

  addItem() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    const dialogRef = this.dialog.open(AddItemComponent, dialogConfig);
  }

  deleteItem(item:any){
   this.itemService.deleteItem(item); 
  }

  changeInput(){
    this.finalAmount = (this.itemService.getTotalAmount()*(1+this.tax*0.01))*(1-this.discount*0.01);  
    this.finalAmount = (Math.round(this.finalAmount * 100) / 100);
  }
  passData(){
    console.log("hiiii");
    
    this.invoiceDataService.setInvoiceData(this.user,this.selectedCustomer.name,
    this.billDate,this.billDueDate,this.selectedStatus,this.dataSource.data,
    this.tax,this.discount,this.totalAmount,this.finalAmount);
  }
  changeCustomer(){
    this.selectedCustomer = {
      name: "",
      email: "",
      address: "",
      mobile: ""
    };
  }

}


