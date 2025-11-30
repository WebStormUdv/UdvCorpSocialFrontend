import { Component, input, OnInit } from '@angular/core';
import { CommentsService } from '../../../services/comments.service';

@Component({
  selector: 'app-comments',
  imports: [],
  providers: [CommentsService],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
})
export class Comments implements OnInit {
  public communityId = input.required<number>();

  constructor(private _commentsService: CommentsService) {}

  ngOnInit(): void {
    this._commentsService.getComments(this.communityId());
  }
}
