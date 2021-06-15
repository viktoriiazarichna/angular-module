import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {User} from "../models/User";
import {Observable} from "rxjs";
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<any> {


  constructor(private usersService: UsersService) { }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return this.usersService.getUserById(activatedRouteSnapshot.params.id);
  }
}
