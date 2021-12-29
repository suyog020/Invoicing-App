import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddCustomerComponent>,
    private customerService:CustomerService){ }

  ngOnInit(): void {
  }

  credentials = {
    name:"",
    email:"",
    address:"",
    mobile:""
  }
  onSubmit(){
    if((this.credentials.name != '' && this.credentials.email != '' 
    && this.credentials.address != '' && this.credentials.mobile != '')&&
    (this.credentials.name != null && this.credentials.email != null 
    && this.credentials.address != null && this.credentials.mobile != null))
    {
      this.customerService.addCustomer(this.credentials).subscribe(
        response=>{
          console.log("hiii");
          console.log(response);
        }
      );
      this.dialogRef.close();

    }else{
      alert("Fields are empty");
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
