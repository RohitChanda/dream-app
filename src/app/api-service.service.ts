import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl:string=" http://localhost:5000/api"
  constructor(private httpClient:HttpClient) { }

  userprofile(token){
    return this.httpClient.get<any>(this.baseUrl + '/userprofile',{params:{token:token}});
  }

  
  handelUserOwnPosts(token)
  {
    console.log("from api 2sdf");
    console.log(token)
    return this.httpClient.get<any>(this.baseUrl + '/ownposts',{params:{token:token}});
  }

  handelUserPosts(file:File,text:string,token:string)
  {
    const userPostForm: FormData = new FormData();
    userPostForm.append('file', file, file.name);
    return this.httpClient.post<any>(this.baseUrl + '/userpost',userPostForm,{params:{text,token}});
  }
  fetchAllFeeds(token){
    return this.httpClient.get<any>(this.baseUrl + '/fetchallposts',{params:{token}});
  }
  uploadUserProfilepic(file:File,token){
    const dpForm: FormData = new FormData();
    dpForm.append('file',file, file.name);
    return this.httpClient.post<any>(this.baseUrl + '/updateprofilepic',dpForm,{params:{token}});
  }
  handeluserNameList(token:string){
    console.log("from api"+token)
    return this.httpClient.get<any>(this.baseUrl + '/usernamelist',{params:{token}});
  }
  
}

/*
postFile(fileToUpload: File): Observable<boolean> {
  const endpoint = 'your-destination-url';
  const formData: FormData = new FormData();
  formData.append('fileKey', fileToUpload, fileToUpload.name);
  return this.httpClient
    .post(endpoint, formData, { headers: yourHeadersConfig })
    .map(() => { return true; })
    .catch((e) => this.handleError(e));
}*/