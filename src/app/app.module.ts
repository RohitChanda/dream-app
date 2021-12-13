import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { FeedsModule } from './feeds/feeds.module';
import { CookieService } from 'ngx-cookie-service';
import { UserprofileModule } from './userprofile/userprofile.module';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    FeedsModule,
    UserprofileModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
