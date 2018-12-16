import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'comments', component: CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
