import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerModel } from 'src/app/model/customerModel';
import { CustomerService } from 'src/app/services/customer.service';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customers : CustomerModel[] = [];
  constructor(private customerService:CustomerService,
    public dialog:MatDialog) {
      this.loadCustomers();
  }
  dataSource = new MatTableDataSource<CustomerModel>(this.customers);
  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  ngAfterViewInit() {
    this.paginator = this.paginator;
  }
 
  loadCustomers(){
    this.customerService.getCustomer().subscribe(
      (res:any)=>{
        this.customers = res.customerList
        console.log(this.customers);
      }
    )
  }
  displayedColumns: string[] = ['Id', 'Name', 'Email', 'Address','Mobile','Edit','Delete'];

  deleteCustomer(cust:any){
    console.log(cust);
    this.customerService.deleteCustomer(cust.id).subscribe(
      res=>{console.log(res)}
    );
  }
  addNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    const dialogRef = this.dialog.open(AddCustomerComponent,dialogConfig);
  }

  edit(customer:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = customer;
    const dialogRef = this.dialog.open(EditCustomerComponent,dialogConfig);
  }
  
}