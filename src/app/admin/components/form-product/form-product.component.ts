import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  img$: Observable<any>;

  constructor(private formBuilter: FormBuilder,
              private productService: ProductsService,
              private router: Router,
              private storage: AngularFireStorage) {
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

  uploadFile(event) {
    const file = event.target.files[0];
    console.log('estamos en file', file);
    const name = `/path/${file.name}`;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges()
      .pipe(
        finalize(() => {
         this.img$ = fileRef.getDownloadURL();
         this.img$.subscribe(url => {
           console.log(url);
           this.form.get('image').setValue(url);
         });
        })
      ).subscribe();
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
