import { Component, OnInit, Input } from '@angular/core';
import { IReviews } from 'src/app/shared/models/reviews';

@Component({
  selector: 'app-reviews-item',
  templateUrl: './reviews-item.component.html',
  styleUrls: ['./reviews-item.component.scss']
})
export class ReviewsItemComponent implements OnInit {
  @Input() review: IReviews;

  constructor() { }

  ngOnInit(): void {
  }

}
