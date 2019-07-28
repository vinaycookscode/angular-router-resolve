import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserDataComponent} from './user-data/user-data.component';
import {UserPostsResolve} from './user-data/user-data-resolve';

const routes: Routes = [
  { path: 'user', component: UserDataComponent, resolve : {userPostsResolve : UserPostsResolve} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
