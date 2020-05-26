import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IReviews } from 'src/app/shared/models/reviews';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  public env = environment;
  public productId: number;
  public product: IProduct;
  public reviews: IReviews[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = +params['id'];
    });

    this.productService.products$.subscribe(data => {
      this.product = data.find(item => item.id === this.productId);
    })
  }

}
