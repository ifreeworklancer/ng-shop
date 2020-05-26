import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReviewsService } from 'src/app/shared/services/reviews.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICurrentUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-add-reviews',
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.scss']
})
export class AddReviewsComponent implements OnInit {
  public currentUser: ICurrentUser;
  public addReview: FormGroup;
  public loading = false;
  public submitted = false;

  @Input() productId: number;
  @Output() submitReview = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private reviewsService: ReviewsService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  public get formAddReview() { return this.addReview.controls; }

  public onSubmit() {
    this.submitted = true;

    if (this.addReview.invalid) {
      return;
    }

    this.loading = true;

    this.reviewsService.addReviews(this.productId, this.addReview.value).subscribe(res => {
      this.loading = false;
      res.success ? (this.submitReview.emit(res.success), this.addReview.reset({ text: '', rate: 5 }), this.submitted = false) : (this.alertService.error(res.message));
    });
  }

  ngOnInit() {
    this.addReview = this.formBuilder.group({
      text: ['', Validators.required],
      rate: [5, Validators.required],
    });
  }
}
