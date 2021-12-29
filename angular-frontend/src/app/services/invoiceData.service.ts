import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InvoiceService } from './invoice.service';


@Injectable({
  providedIn: 'root'
})
export class InvoiceDataService {

  constructor(private invoiceService:InvoiceService) { }
  client:string = '';
  user:any;
  billDate:any;
  billDueDate:any;
  status:string = "";
  items:any;
  gst:number = 0;
  discount:number = 0;
  totalAmount:number = 0;
  finalAmount:number = 0;
  setInvoiceData(user:any,client:string,billDate:any,billDueDate:any,status:string,items:any,gst:number,discount:number,totalAmount:number,finalAmount:number){
    this.user = user;
    this.client = client;
    this.billDate = billDate;
    this.billDueDate = billDueDate;
    this.status = status;
    this.items = items;
    this.gst = gst;
    this.discount = discount;
    this.totalAmount = totalAmount;
    this.finalAmount = finalAmount;

    let invoice = {
      "client":this.client,
      "amount":this.finalAmount,
      "status":this.status,
      "user":this.user
    }
    this.invoiceService.addInvoice(invoice).subscribe(
      (res:any)=>{
        console.log(res);
      }
    );
  }

}
