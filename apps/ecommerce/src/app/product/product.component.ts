import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'nxworkspace-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProduct();
  }

}
