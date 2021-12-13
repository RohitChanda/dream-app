import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string=" http://localhost:5000/api";

  constructor(private httpClient : HttpClient,private cookieService:CookieService,private route:Router) { }
  handelSignupForm(formvalue){
   
    return this.httpClient.post<any>(this.baseUrl + '/signup',{formvalue});

  }

  handelLoginForm(formvalue){
    return this.httpClient.post<any>(this.baseUrl + '/signin',{formvalue});
  }
  handelLogout(){
    this.cookieService.delete('jwt');
    alert('You are Successfullt Logout');
    this.route.navigate(['/signin']);
  }
}
