import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe(data => {
      console.log(data);
      this.fetchProducts();
    });
  }

}
