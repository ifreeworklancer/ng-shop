import { Injectable } from '@angular/core';
import { IReviews, ICreatedReview } from '../models/reviews';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  public reviews$: BehaviorSubject<IReviews[]> = new BehaviorSubject<IReviews[]>([]);

  constructor(private http: HttpClient) {
  }

  public getReviews(id: number) {
    return this.http.get<IReviews[]>(environment.apiUri.concat(`reviews/${id}`)).subscribe(
      (reviews: IReviews[]) => {
        this.reviews$.next([...reviews]);
      },
      error => {
        console.error(error);
      });
  }

  public addReviews(id: number, form: Object) {
    return this.http.post<ICreatedReview>(environment.apiUri.concat(`reviews/${id}`), form);
  }
}
