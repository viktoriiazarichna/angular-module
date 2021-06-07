import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment} from "../../models/Comment";
import {CommentService} from "../../service/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];
  constructor(private commentsService: CommentService) {

  }

  ngOnInit(): void {
    this.commentsService.getComments().subscribe(value => {
      this.comments = value;
    })
  }

}
