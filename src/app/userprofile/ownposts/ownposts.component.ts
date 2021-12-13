import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiServiceService } from 'src/app/api-service.service';
@Component({
  selector: 'app-ownposts',
  templateUrl: './ownposts.component.html',
  styleUrls: ['./ownposts.component.css'] 
})
export class OwnpostsComponent implements OnInit {
  token:string;
  user_posts:any[];
  data:any="";
  baseFileLink:string="http://localhost:5000/public/upload-file/userspost";
  constructor(private cookieService:CookieService,private dataService:ApiServiceService) { }

  ngOnInit(): void {
    
    if(this.cookieService.get('jwt')){
      this.token=this.cookieService.get('jwt');
      this.dataService.handelUserOwnPosts(this.token).subscribe((res)=>{
        this.user_posts=res.data;
        // this.route.navigate(['/profile']);
        // this.reloadComponent();
      });
      
    }
  }
  checkImgExtension(src:any){
    const extension=src.split(/[#?]/)[0].split('.').pop();
     if(extension !='mp4'){
       return true;
     }else{
       return false;
     }
     
   }
   checkFileExtension(src:any){
    const f_extension=src.split(/[#?]/)[0].split('.').pop();
     if(f_extension =='mp4'){
      return true;
     }else{
       return false;
     }
    
   }

  

}
