import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Output() deleted = new EventEmitter<any>();
  @Input() postRef: Post;
  constructor() { }

  ngOnInit(): void {
  }

  deletePost(): void {
    this.deleted.emit();
  }

}
