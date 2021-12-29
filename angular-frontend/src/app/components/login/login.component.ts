import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  }

  constructor(private loginService: LoginService,
    private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("Form Submitted!!")
    if ((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != null && this.credentials.password != null)) {
      //generate token
      this.loginService.generateJwtToken(this.credentials).subscribe(
        (res: any) => {
          this.loginService.loginUser(res.jwtToken)

          //get current user
          this.loginService.getCurrentUser().subscribe(
            (user: any) => {
              console.log(user);
              this.loginService.setUser(user);
              window.location.href = "/dashboard";
            }
          );

        },
        error => {
          console.log(error)
        }
      );
    } else {
      alert("Fields are empty");
    }
  }
}
