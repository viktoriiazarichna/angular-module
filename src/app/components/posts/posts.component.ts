import { Component, OnInit } from '@angular/core';
import {PostService} from "../../service/post.service";
import {Post} from "../../models/Post";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => {
      this.posts = value;
    });

  }

}
