import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserprofileRoutingModule } from './userprofile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnpostsComponent } from './ownposts/ownposts.component';



@NgModule({
  declarations: [
    ProfileComponent,
    OwnpostsComponent,
  ],
  imports: [
    CommonModule,
    UserprofileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  
})
export class UserprofileModule { }
