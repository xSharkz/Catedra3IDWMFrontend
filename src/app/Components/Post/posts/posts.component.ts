import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { PostService } from '../../../Services/post.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
