import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
 {
  path: '', children: [
    { path: '', component: OrdersComponent},
    { path: 'orders', component: OrdersComponent },
    { path: 'article', component: ArticleComponent }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
