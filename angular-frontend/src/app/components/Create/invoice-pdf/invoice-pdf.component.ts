import { Component, ViewChild, ElementRef } from '@angular/core';
import { InvoiceDataService } from 'src/app/services/invoiceData.service';

import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-invoice-pdf',
  templateUrl: './invoice-pdf.component.html',
  styleUrls: ['./invoice-pdf.component.css']
})
export class InvoicePdfComponent {
  client:any;
  user:any;
  billDate:any;
  billDueDate:any;
  status:string = "";
  items:any;
  gst:number = 0;
  discount:number = 0;
  totalAmount:number = 0;
  finalAmount:number = 0;
  constructor(private invoiceDataService:InvoiceDataService) {
    this.user = this.invoiceDataService.user;
    this.client = this.invoiceDataService.client;
    this.billDate = this.invoiceDataService.billDate;
    this.billDueDate = this.invoiceDataService.billDueDate;
    this.status = this.invoiceDataService.status;
    this.items = this.invoiceDataService.items;
    this.gst = this.invoiceDataService.gst;
    this.discount = this.invoiceDataService.discount;
    this.totalAmount = this.invoiceDataService.totalAmount;
    this.finalAmount = this.invoiceDataService.finalAmount;
  }
  displayedColumns = ["Item", "Quantity", "Price", "Amount"];
  data:HTMLCanvasElement|undefined;
  
  public downloadAsPDF() {
    setTimeout(() => { 
      console.log("hiii"); 
      var can = document.getElementById("pdfTable") as HTMLCanvasElement;
      console.log(can);   
      html2canvas(can).then(canvas => {
        console.log(canvas);
       const contentDataURL = canvas.toDataURL('image/png');
       let pdf = new jspdf('l', 'cm', 'a4');        
       pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
       pdf.save('Filename.pdf');     
      });
  }, 5000);
}
}
