import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { GoodComponent } from './good/good.component';
import { BarnsComponent } from './mough/barns/barns.component';


@NgModule({
  declarations: [
    PricingComponent,
    GoodComponent,
    BarnsComponent
  ],
  imports: [
    CommonModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
