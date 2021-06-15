import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../models/User";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => this.users = value);
  }

  catchUser(value: any) {
    console.log(value)
  }

}
