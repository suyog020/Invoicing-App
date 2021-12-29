import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  @Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  getAllInvoicesUrl ="http://localhost:8080/invoice";
  deleteInvoiceUrl = "http://localhost:8080/removeInvoice";
  addInvoiceUrl = "http://localhost:8080/addInvoice";
  updateInvoiceUrl = "http://localhost:8080/updateInvoice";

  constructor(private http:HttpClient) { }
  
  getInvoice(){
    return this.http.get(`${this.getAllInvoicesUrl}`);
  }
  deleteInvoice(id:number){
    return this.http.delete(`${this.deleteInvoiceUrl}/${id}`) 
  }
  addInvoice(invoice:any){
    return this.http.post(`${this.addInvoiceUrl}`,invoice,httpOptions);
  }
  updateInvoice(invoice:any){
    return this.http.put(`${this.updateInvoiceUrl}`,invoice,httpOptions); 
  }

}
