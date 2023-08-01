import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { UnCommonPageComponent } from './pages/un-common-page/un-common-page.component';


@NgModule({
  declarations: [
    NumbersComponent,
    BasicsPageComponent,
    UnCommonPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
