import { Component } from '@angular/core';

@Component({
  selector: 'app-flash-sale',
  templateUrl: './flash-sale.component.html',
  styleUrls: ['./flash-sale.component.scss'],
})
export class FlashSaleComponent {
  flashSales = [
    {
      name: 'Brillo',
      price: 20.99,
      discount: 10.0,
      finalPrice() {
        return this.price - this.price * (this.discount / 100);
      },
    },
    {
      name: 'Platilina',
      price: 20.99,
      discount: 10.0,
      finalPrice() {
        return this.price - this.price * (this.discount / 100);
      },
    },
    {
      name: 'Yeso',
      price: 20.99,
      discount: 10.0,
      finalPrice() {
        return this.price - this.price * (this.discount / 100);
      },
    },
  ];
}
