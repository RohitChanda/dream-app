import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CheckuserService {

  constructor(private cookieService:CookieService) { }
  isLoggin(){
    if(this.cookieService.get('jwt')){
      return true;
    }else{
      return false;
    }
  }

}
