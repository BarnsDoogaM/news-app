import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ArticleComponent } from './article/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SourcesComponent } from './sources/sources.component';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    OrdersComponent,
    ArticleComponent,
    SourcesComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ReactiveFormsModule,
    FormsModule
    // MatToolbarModule,
    // MatIconModule
    
  ]
})
export class OrdersModule { }
