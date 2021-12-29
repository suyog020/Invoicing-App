import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  getAllCustomersUrl ="http://localhost:8080/customer";
  deleteCustomerUrl = "http://localhost:8080/removeCustomer";
  addCustomerUrl = "http://localhost:8080/addCustomer";
  updateCustomerUrl = "http://localhost:8080/updateCustomer";
  
  constructor(private http:HttpClient) { }
  
  getCustomer(){
    return this.http.get(`${this.getAllCustomersUrl}`);
  }
  deleteCustomer(id:number){
    return this.http.delete(`${this.deleteCustomerUrl}/${id}`) 
  }
  addCustomer(customer:any){
    return this.http.post(`${this.addCustomerUrl}`,customer,httpOptions);
  }
  updateCustomer(customer:any){
    return this.http.put(`${this.updateCustomerUrl}`,customer,httpOptions); 
  }
}
