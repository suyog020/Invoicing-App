import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  credentials={
    username:"",
    email:"",
    password1:"",
    password2:""
  }
  user={
    id:104,
    name:"",
    email:"",
    password:"",
    customers:[]
  }
 
  onSubmit(){
    console.log("Form Submitted!!")
    if((this.credentials.username != '' && this.credentials.email != '' 
    && this.credentials.password1 != '' && this.credentials.password2 != '')&&
    (this.credentials.username != null && this.credentials.email != null 
    && this.credentials.password1 != null && this.credentials.password2 != null))
    {
      if(this.credentials.password1 == this.credentials.password2)
      {
        
        this.user.name = this.credentials.username;
        this.user.email = this.credentials.email;
        this.user.password = this.credentials.password1;
        //creating new user
        this.userService.addUser(this.user).subscribe(
          response => console.log(response),
          err => console.log(err)
        );
      }
      else{
        alert("Passwords are not matching!!");
      }

    }else{
      alert("Fields are empty");
    }
  }


}
