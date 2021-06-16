import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { UsersService } from './users.service';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User> {


  constructor(private usersService: UsersService) { }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {

    return this.usersService.getUserById(activatedRouteSnapshot.params.id);
  }
}
