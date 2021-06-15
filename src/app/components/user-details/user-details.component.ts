import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  usersFromState: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataTransfer: DataTransferService) {
    activatedRoute.params.subscribe(() => {
      this.usersFromState = this.router.getCurrentNavigation()?.extras.state;
      this.dataTransfer.store.next(this.usersFromState);
    })

  }

  ngOnInit(): void {
  }

}
