import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from '../shared/chat/chat.component';
import { UserComponent } from './user.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'helpcenter',
        component: HelpCenterComponent
      },
      {
        path: 'payment',
        component: PaymentMethodComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
