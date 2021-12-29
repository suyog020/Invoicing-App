import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private customerService:CustomerService){ }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.data.name != '' && this.data.email != '' 
    && this.data.address != '' && this.data.mobile != '')&&
    (this.data.name != null && this.data.email != null 
    && this.data.address != null && this.data.mobile != null))
    {
      this.customerService.updateCustomer(this.data).subscribe(
        response=>{
          console.log("hiii");
          console.log(response);
        }
      );
    }else{
      alert("Fields are empty");
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
