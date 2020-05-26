import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/app/shared/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products$: Observable<IProduct[]>;

  constructor(
    private productService: ProductService,
  ) {
    this.products$ = this.productService.products$;
  }

  ngOnInit(): void {
  }

}
