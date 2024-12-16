import { Component } from '@angular/core';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
})
export class NewArrivalsComponent {
  arrivals = [
    {
      name: 'Platilina',
      price: 299.0,
      rate: 5.0,
    },
    {
      name: 'Brillo',
      price: 29.0,
      rate: 4.9,
    },
    {
      name: 'Resina',
      price: 399.0,
      rate: 5.0,
    },
  ];
}
