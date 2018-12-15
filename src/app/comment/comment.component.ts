import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments: Comment[];

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.getComment();
  }


  getComment() {
    this.commentService.getAll().subscribe(comments => {
      this.comments = comments;
    });
  }

}
