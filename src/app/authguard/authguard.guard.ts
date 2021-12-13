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
      return true;
    }
    else{
      alert("You are not logged in");
      this.route.navigate(['/signin']);
      return false;
    }
  }
  
}
