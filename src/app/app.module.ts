import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TemplateDrivenFormComponent } from './component/template-driven-form/template-driven-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { UsersComponent } from './component/users/users.component';
import { UserComponent } from './component/user/user.component';
import { SelectFormComponent } from './component/select-form/select-form.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    UsersComponent,
    UserComponent,
    SelectFormComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
