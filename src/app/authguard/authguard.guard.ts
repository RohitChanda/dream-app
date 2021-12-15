import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { CheckuserService } from './checkuser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private checkUser:CheckuserService,private route:Router){}
  canActivate() {
    if(this.checkUser.isLoggin()){
      console.log("here1");
      return true;
    }
    else{
      console.log("here2");
      alert("You are not logged in");
      this.route.navigate(['/signin']);
      return false;
    }
    
   
  }
  
}
