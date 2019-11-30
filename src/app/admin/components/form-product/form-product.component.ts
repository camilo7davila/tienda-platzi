import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilter: FormBuilder, private productService: ProductsService, private router: Router) {
    this.buildForm();
  }

  ngOnInit() {
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.createProduct(product).subscribe(data => {
        console.log(data);
        this.router.navigate(['./admin/product']);
      });
    } else {
      console.log('falta informacion');
    }
  }

  private buildForm() {
    this.form = this.formBuilter.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [, [Validators.required]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

}
