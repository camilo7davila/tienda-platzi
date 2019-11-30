import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Product } from 'src/app/interface/product.interface';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.urlApi);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.urlApi}${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.urlApi}`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.urlApi}${id}`, changes);
  }
  deleteProduct(id: string) {
    return this.http.delete(`${environment.urlApi}${id}`);
  }
}
