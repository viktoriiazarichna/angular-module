import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../user.service";
import {User} from "../models/user";

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.css']
})
export class SelectFormComponent implements OnInit {

  id = new FormControl();

  myForm = new FormGroup( {
    id:  this.id,

  })

  users: User[];
  constructor(private userService:  UserService ) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {
      this.users = value;
    });
  }

  save() {
    console.log(this.myForm.controls.id.value);

  }
}
