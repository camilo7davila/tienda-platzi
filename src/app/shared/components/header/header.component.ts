import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/carrito/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;

  constructor(private cartService: CartService) {
                // sirve pero toca suscribirse
    // this.cartService.cart$.subscribe(products => {
    // this.total = products.length;
    // });

                  // Sin necesidad de suscribirse y usando el pipe async
    this.total$ = this.cartService.cart$.pipe(
      map(products => products.length)
      );
   }

  ngOnInit() {
  }

}
