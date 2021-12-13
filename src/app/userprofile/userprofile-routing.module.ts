import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../authguard/authguard.guard';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {path:'profile',component:ProfileComponent,canActivate:[AuthguardGuard]},
  { path: '',   redirectTo: '/profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserprofileRoutingModule { }
