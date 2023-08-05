import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounsellingRoutingModule } from './counselling-routing.module';
import { CounsellingComponent } from './counselling.component';
import { ProblemComponent } from './problem/problem.component';


@NgModule({
  declarations: [
    CounsellingComponent,
    ProblemComponent
  ],
  imports: [
    CommonModule,
    CounsellingRoutingModule
  ]
})
export class CounsellingModule { }
