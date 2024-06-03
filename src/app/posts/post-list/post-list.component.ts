import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  lists: any[] = [];
  lists1: any[] = [];
  lists2: any[] = [];
  lists3: any[] = [];

  constructor(private router: Router, private postService: PostService) {}
  
  ngOnInit(): void {
    this.lists = this.postService.lists;
    this.lists1 = this.postService.lists1;
    this.lists2 = this.postService.lists2;
    this.lists3 = this.postService.lists3;
  }

  goToDetails(postId: number) {
    this.router.navigate(['/post-details', postId]);
  }
}