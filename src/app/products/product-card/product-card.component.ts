import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  public env = environment;
  @Input() product: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
