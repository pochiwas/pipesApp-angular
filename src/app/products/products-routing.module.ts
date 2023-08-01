import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UnCommonPageComponent } from './pages/un-common-page/un-common-page.component';

const routes: Routes = [
  {
    path:'',
    component:BasicsPageComponent
  },
  {
    path:'Numbers',
    component:NumbersComponent
  },
  {
    path:'unCommon',
    component:UnCommonPageComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
