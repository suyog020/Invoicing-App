import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  addUserUrl = "http://localhost:8080/addUser";

  constructor(private http:HttpClient) { }
  
  addUser(user:any){
    return this.http.post(`${this.addUserUrl}`,user,httpOptions);
  }

  
}
