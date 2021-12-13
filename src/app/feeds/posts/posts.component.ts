import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  allPosts:any[];
  allUsers:any[]; 
  token:string;
  singleUser:any;
  usercount:string;
  default_profil_img="http://localhost:5000/public/uploadfile/userspost/default-profile.png";
  constructor(private dataService:ApiServiceService,private cookieService:CookieService,private router:Router) { }

  ngOnInit(): void {
    if(this.cookieService.get('jwt')){
      this.token=this.cookieService.get('jwt');
    }

    this.dataService.fetchAllFeeds(this.token).subscribe((res)=>{
      this.allPosts=res.data;
      this.allUsers=res.users;
      this.singleUser=res.singleuser;
      this.usercount=res.usercount;
      
      
      // console.log(new Date(res.data[0].date))
      // console.log(new Date(Date.now()))
      // if(res.singleuser.pro!=null){
      //   this.singleUser=
      // }
    });

  }
  // postSomething(event):void{
  //   event.preventDefault();
  //   this.router.navigate(['/profile']);

  // }
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
