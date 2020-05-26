import { Component, OnInit, Input } from '@angular/core';
import { ReviewsService } from 'src/app/shared/services/reviews.service';
import { IReviews } from 'src/app/shared/models/reviews';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class ReviewsListComponent implements OnInit {
  public reviews$: Observable<IReviews[]>;
  public limitShow = 5;
  public showLoadMore: boolean;
  public hasMoreItemsToShow: number;
  @Input() productId: number;

  constructor(
    private reviewsService: ReviewsService
  ) {
    this.reviews$ = this.reviewsService.reviews$;
    this.updateListReviews();
  }

  public submitReview(data) {
    this.reviewsService.getReviews(this.productId);
    this.updateListReviews(true);
  }

  // Updates the display of the Load More buttons and displays all reviews if the user has added a new one.
  public updateListReviews(showAll?: boolean) {
    this.reviews$.subscribe(res => {
      if (showAll) {
        this.limitShow = res.length;
      }
      this.limitShow < res.length ? this.showLoadMore = true : this.showLoadMore = false;
    })
  }

  public loadMore() {
    this.hasMoreItemsToShow = this.reviewsService.reviews$.value.length - this.limitShow;
    this.limitShow < this.hasMoreItemsToShow ? this.limitShow += this.limitShow : (this.limitShow += this.hasMoreItemsToShow, this.showLoadMore = false);
  }

  ngOnInit(): void {
    this.reviewsService.getReviews(this.productId);
  }
}
