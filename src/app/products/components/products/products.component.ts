import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interface/product.interface';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { CartService } from 'src/app/core/services/carrito/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  arrayProducts: Product[] = [];
  onlyProduct: Product;

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.arrayProducts = products;
      console.log(products);
    });
  }

  addCar(id: string) {
    this.onlyProduct = this.arrayProducts.find(data => data.id === id);
    console.log(this.arrayProducts);
    console.log(this.onlyProduct);
    this.cartService.addCart(this.onlyProduct);
  }

}
