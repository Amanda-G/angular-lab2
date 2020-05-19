import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() added = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  addPost(form: NgForm): void {
    this.added.emit(form);
    form.reset();
  }

}
