import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { User } from 'src/app/models/User';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-details-from-server',
  templateUrl: './user-details-from-server.component.html',
  styleUrls: ['./user-details-from-server.component.css']
})
export class UserDetailsFromServerComponent implements OnInit {

  userFromServer: User;
  constructor(private usersService: UsersService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( value => {
      let id = value.id;
      this.usersService.getUserById(id).subscribe(userResponse => this.userFromServer = userResponse )

    });
    this.activatedRoute.data.subscribe(data => console.log(data))
  }

  ngOnInit(): void {
  }

}
