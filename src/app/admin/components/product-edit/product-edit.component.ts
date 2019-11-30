import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;

  constructor(private formBuilter: FormBuilder, private productService: ProductsService,
              private router: Router, private activeRoute: ActivatedRoute) {
    this.buildForm();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe(data => {
        this.form.patchValue(data);
      });
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.updateProduct(this.id, product).subscribe(data => {
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
