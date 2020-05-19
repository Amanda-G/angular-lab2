import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    { title: "Grand Circus", post: "Grand Circus is cool." },
    { title: "Ritual", post: "Ritual is a well developed app." },
    { title: "Scott", post: "Scott rides scooters." }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addPost(form: NgForm) {
    let newPost: Post = {
      title: form.value.title,
      post: form.value.post
    };
    this.posts.push(newPost);
  }

  deletePost(index: number): void {
    this.posts.splice(index, 1)
  }

}
