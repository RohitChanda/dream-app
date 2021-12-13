import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedsRoutingModule } from './feeds-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { PeoplelistComponent } from './peoplelist/peoplelist.component';
import { PeopleComponent } from './people/people.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    NavbarComponent,
    PostsComponent,
    PeoplelistComponent,
    PeopleComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule,
    FeedsRoutingModule,
    
  ],
 
})
export class FeedsModule { }
