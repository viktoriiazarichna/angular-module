import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserDetailsFromServerComponent } from './components/user-details-from-server/user-details-from-server.component';
import { UserResolveService } from './services/user-resolve.service';

let routes: Routes = [
  {path: 'detailsFromState/:id', component: UserDetailsComponent},
  {path: 'userDetailsFromServer/:id', component: UserDetailsFromServerComponent, resolve: {data: UserResolveService }},
  {path: 'posts', loadChildren: () => import('./components/modules/posts/posts.module').then(m => m.PostsModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserDetailsFromServerComponent
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
