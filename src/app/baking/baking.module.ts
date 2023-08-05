import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BakingRoutingModule } from './baking-routing.module';
import { BakingComponent } from './baking.component';


@NgModule({
  declarations: [
    BakingComponent
  ],
  imports: [
    CommonModule,
    BakingRoutingModule
  ]
})
export class BakingModule { }
