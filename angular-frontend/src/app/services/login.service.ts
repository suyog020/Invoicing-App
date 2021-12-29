import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:8080"
  getCurrentUserUrl = "http://localhost:8080/currentUser"

  constructor(private http:HttpClient) { }

  //calling server to generate token
  generateJwtToken(credentials:any){
    //generate token
    return this.http.post(`${this.url}/authenticate`,credentials);
  }

  //get current login user
  getCurrentUser(){
    return this.http.get(`${this.getCurrentUserUrl}`);
  }
  
  //for login user --> store token in localStorage
  loginUser(token: string){
    localStorage.setItem("token",token);
    console.log("hello");
    return true;
  }

  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token==undefined || token=='' || token==null){
      return false;
    }else{
      return true;
    }
  }

  logOut(){
    localStorage.removeItem("token");
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }

  setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }
  
  getUser(){
    let curr_user = localStorage.getItem('user');
    if(curr_user!=null){
      return JSON.parse(curr_user);
    }else{
      this.logOut();
      return null;
    }
  }
  
  
}
