import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isForgot:boolean=false;
  loginForm:FormGroup;
  constructor(private authService:AuthService,
    private router:Router,
    private cookieService:CookieService
    ) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }
  /*lets learn github*/
  submitLoginForm(loginForm){
    this.authService.handelLoginForm(loginForm).subscribe((res)=>{
      if(res.data == "login"){
        this.cookieService.set('jwt',res.token);
        this.router.navigate(['/posts']);
      }else if(res.data == "unregister email"){
        alert("Your email is not registered");
      }
      else if(res.data == "password incorrect"){
        alert("Your password doesn't matched");
        this.isForgot=true;
      }
    })
  }

}
