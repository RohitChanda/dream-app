import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  token:string;
  user_details:any;
  age:number;
  userPostForm:FormGroup;
  fileToUpload: File | null = null;
  hideDpSelector:boolean=false;
  default_profil_img="http://localhost:5000/public/uploadfile/userspost/default-profile.png";
  constructor(private cookieService:CookieService,private dataService:ApiServiceService,
    private router:Router) { }

  ngOnInit(): void {
    
    if(this.cookieService.get('jwt')){
      this.token=this.cookieService.get('jwt');
      this.dataService.userprofile(this.token).subscribe((res)=>{
        this.user_details=res.data;
        this.age=new Date().getFullYear()-res.data.year;
        console.log(this.age)
      });
      
    }
    this.userPostForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  get text() { return this.userPostForm.get('text') }
  
  handleFileInput(event):void{
    this.fileToUpload=<File>event.target.files[0];
  }
  
  userPost(userPostForm):void
  {
    this.dataService.handelUserPosts(this.fileToUpload,userPostForm.text,this.token).subscribe((res)=>{
      this.reloadComponent();
    });
  }

  reloadComponent():void 
  {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  // clickToUpload(e):void
  // {
  //   e.preventDefault();
  //   console.log("clicked");
  //   const button=document.getElementById('img');
  //   console.log(button)
  //   button.addEventListener('click', (e) => {
  //     console.log("here clicked")
  // });
  //}
  uploadDisplayPic(event){
    event.preventDefault();
    const userDp:File=<File>event.target.files[0];
    this.dataService.uploadUserProfilepic(userDp,this.token).subscribe((res)=>{
      if(res.status){
        this.reloadComponent();
      }
    });

  }
}
