import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {DeactivatorService} from "./service/deactivator.service";
import { CommentsComponent } from './components/comments/comments.component';
import {ResolveService} from "./service/resolve.service";
import { CommentComponent } from './components/comment/comment.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';


let routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UsersComponent,
      children: [{path: ':id', component: UserDetailsComponent}]
    },
    {path: 'posts', component: PostsComponent, canDeactivate: [DeactivatorService]},
    {path: 'posts/:id', component: PostDetailsComponent, canActivate: [DeactivatorService]},
    {path: 'comments', component: CommentsComponent,
      children: [{path: ':id', component: CommentDetailsComponent }]}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    HomeComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
