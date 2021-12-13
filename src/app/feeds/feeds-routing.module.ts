import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../authguard/authguard.guard';
import { PeopleComponent } from './people/people.component';
import { PeoplelistComponent } from './peoplelist/peoplelist.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path:'posts',component:PostsComponent,canActivate:[AuthguardGuard]},
  {path:'peoplelist',component:PeoplelistComponent,canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedsRoutingModule { }
