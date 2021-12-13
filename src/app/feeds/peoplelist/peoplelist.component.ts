import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.css']
})
export class PeoplelistComponent implements OnInit {
  default_profil_img="http://localhost:5000/public/uploadfile/userspost/default-profile.png";
  token:string;
  userdata:any[];
  constructor(private cookieService:CookieService,private dataService:ApiServiceService) { }

  ngOnInit(): void {
    if(this.cookieService.get('jwt')){
      this.token=this.cookieService.get('jwt');
      console.log(this.token)
    }


    this.dataService.handeluserNameList(this.token).subscribe((res)=>{
      this.userdata=res.data;
    });

  } 

}
