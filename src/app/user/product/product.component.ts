import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class ProductComponent {
  @Output() productsData: EventEmitter<any> = new EventEmitter<any>();
  noProductsFound: boolean = false;
  searchTerm: string;
  private productsSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public productsFetched: Observable<any> = this.productsSubject.asObservable();

  constructor(private productService: ProductService) {}

  onSearchSubmit() {
    if (typeof this.searchTerm !== 'string') {
      this.noProductsFound = true;
    }

    this.searchProducts(this.searchTerm);

    this.searchTerm = '';
  }

  searchProducts(searchTerm: string): void {
    this.productService.getProducts(searchTerm).subscribe({
      next: data => {
        this.productsFetched = data;
        this.productsData.emit(data);
      },
      error: error => {
        this.noProductsFound = true;
      }
    });
  }

  products = [
    {
      name: 'Llavero',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/manualidad1.png',
      rating: '5.0',
      description:
        'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
    },
    {
      name: 'Llaver0',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/manualidad2.png',
      rating: '5.0',
      description:
        'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
    },
    {
      name: 'Llavero',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/joystick.png',
      rating: '5.0',
      description: ''
    },
    {
      name: 'Llavero',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/smartphone.png',
      rating: '5.0',
      description:
        'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
    },
    {
      name: 'Llavero',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/smartphone.png',
      rating: '5.0',
      description: ''
    },
    {
      name: 'Llavero',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/smartphone.png',
      rating: '5.0',
      description: 'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
    }
  ];
}

export const products = [
  {
    name: 'Brillo',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto2.png',
    rating: '5.0',
    description:
      'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
  },
  {
    name: 'Plastilina',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto1.png',
    rating: '5.0',
    description:
      'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
  },
  {
    name: 'Brillo',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto1.png',
    rating: '5.0',
    description: ''
  },
  {
    name: 'Plastilina',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto2.png',
    rating: '5.0',
    description:
      'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
  },
  {
    name: 'Brillo',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto1.png',
    rating: '5.0',
    description: ''
  },
  {
    name: 'Plastilina + Lens',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto2.png',
    rating: '5.0',
    description: 'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
  },
  {
    name: 'Brillo extra',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto1.png',
    rating: '5.0',
    description:
      'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
  },
  {
    name: 'Plastilina extra',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto2.png',
    rating: '5.0',
    description:
      'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
  },
  {
    name: 'Brillo extra',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto1.png',
    rating: '5.0',
    description: ''
  },
  {
    name: 'Plastilina extra',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto2.png',
    rating: '5.0',
    description:
      'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
  },
  {
    name: 'Brillo extra',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto1.png',
    rating: '5.0',
    description: ''
  },
  {
    name: 'Plastilina + Lens extra',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto2.png',
    rating: '5.0',
    description: 'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
  },
  {
    name: 'Brillo extra 3',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto1.png',
    rating: '5.0',
    description:
      'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
  },
  {
    name: 'Plastilina extra 3',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto2.png',
    rating: '5.0',
    description:
      'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
  },
  {
    name: 'Brillo extra 3',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto1.png',
    rating: '5.0',
    description: ''
  },
  {
    name: 'Plastilina extra 3',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto2.png',
    rating: '5.0',
    description:
      'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
  },
  {
    name: 'Brillo extra 3',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto1.png',
    rating: '5.0',
    description: ''
  },
  {
    name: 'Plastilina + Lens extra 3',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/producto2.png',
    rating: '5.0',
    description: 'Perfecto llavero para adornar un amochila o cualquier implemento y darle vida'
  }
];
