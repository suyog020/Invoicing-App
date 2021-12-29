import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent{

  constructor(public dialogRef: MatDialogRef<EditInvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private invoiceService:InvoiceService) { 
    }

    onSubmit(){
      if((this.data.amount != '' && this.data.status != '')&&
      (this.data.amount != null && this.data.status != null))
      {
        this.invoiceService.updateInvoice(this.data).subscribe(
          response=>{
            console.log(response);
          }
        );
      }else{
        alert("Fields are empty");
      }
      this.dialogRef.close();
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
}
