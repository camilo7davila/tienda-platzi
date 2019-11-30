import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../interface/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productService.getProduct(id).subscribe(data => {
      this.product = data;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '21',
      description: 'Post desde angular',
      price: 1400,
      title: 'prueba',
      image: 'assets/images/banner-2.jpg'
    };
    this.productService.createProduct(newProduct).subscribe(data => {
      console.log(data);
    });
  }
  updateProduct() {
    const newProduct: Partial<Product> = {
      id: '1',
      description: 'edicion desde put',
      title: 'edicion en angular',
      image: 'assets/images/mug.png'
    };
    this.productService.updateProduct('1', newProduct).subscribe(data => {
      console.log(data);
    });
  }
  deleteProduct() {
    this.productService.deleteProduct('99').subscribe(data => {
      console.log(data);
    });
  }
}
