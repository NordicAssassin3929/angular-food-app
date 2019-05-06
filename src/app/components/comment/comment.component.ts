import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Comm} from "../../interfaces/comment";
import {Location} from '@angular/common';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Comm[];
  comm: string;
  myComment: Comm;

  constructor(private apiService: ApiService,
              private location: Location) {
  }

  ngOnInit() {
    this.apiService.getComments()
      .subscribe((comment) => {
        this.comments = comment;
      });
  }

  addComment(): void {
    const myObj = {
      comment: this.comm,
      app_user_id: 2,
      order_id: 2,
    };

    const comment = JSON.stringify(myObj);

    this.apiService.addComment(comment).subscribe((result) => console.log(result));
    window.location.reload();
  }

  goBack(): void {
    this.location.back();
  }
}
