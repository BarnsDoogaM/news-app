import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { TopHeadLinesComponent } from './top-head-lines/top-head-lines.component';
import { ArticleComponent } from './article/article.component';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    OrdersComponent,
    TopHeadLinesComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    // MatToolbarModule,
    // MatIconModule
    
  ]
})
export class OrdersModule { }
