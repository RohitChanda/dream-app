import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup ;

 //for datepicker

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      
    });
  }
  get name() { return this.signupForm.get('name') }
  get email() { return this.signupForm.get('email') }
  get password() { return this.signupForm.get('password') }
  get age() { return this.signupForm.get('year') }



  submitSignupForm(formvalue){
    if(this.name.status == "INVALID"){
      return alert("name field is required");
    }
    else if(this.email.status == "INVALID"){
      return alert(" proper email field is required");
    }
    else if(this.password.status == "INVALID"){
      return alert("password field is required");
    }
    else if(this.age.status == "INVALID"){
      return alert("age field is required");
    }else{
      // console.log(formvalue)
      // console.log(formvalue.email)
      // console.log(this.email.status)
      this.authService.handelSignupForm(formvalue).subscribe((res)=>{
        if(res.data=="signup")
        {
          alert("you have succesfully submitted your credentials now go login yourself");
          this.router.navigate(['/signin']);
        }
      })
    } 

  }

}
