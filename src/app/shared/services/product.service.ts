import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products$: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);

  constructor(private http: HttpClient) {
    this.http.get(environment.apiUri.concat('products/'))
      .subscribe(
        (products: IProduct[]) => {
          this.products$.next([...products]);
        },
        error => {
          console.error(error);
        });
  }
}
