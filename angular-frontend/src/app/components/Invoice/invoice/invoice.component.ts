import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InvoiceModel } from 'src/app/model/invoiceModel';
import { InvoiceService } from 'src/app/services/invoice.service';
import { EditInvoiceComponent } from '../edit-invoice/edit-invoice.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent{

  invoice : InvoiceModel[] = [];

  constructor(private invoiceService:InvoiceService,
    public dialog:MatDialog) {
    this.loadInvoices();
  }
  displayedColumns: string[] = ['Id', 'Client', 'Amount', 'Status','Edit','Delete'];
  dataSource = new MatTableDataSource<InvoiceModel>(this.invoice);  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  ngAfterViewInit() {
    this.paginator = this.paginator;
  }

  loadInvoices(){
    this.invoiceService.getInvoice().subscribe(
      (res:any)=>{
        this.invoice = res.invoiceList;
      }
    )
  }

  editInvoice(invoice:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = invoice;
    const dialogRef = this.dialog.open(EditInvoiceComponent,dialogConfig);
  }
  deleteInvoice(id:number){
    this.invoiceService.deleteInvoice(id).subscribe(
      (res:any)=>{
        this.loadInvoices();
      }
    )
  }
  addInvoice(){
    
  }
}
