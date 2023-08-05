import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounsellingComponent } from './counselling.component';
import { ProblemComponent } from './problem/problem.component';

const routes: Routes = [
  {
    path: '', children:[
     
      { path: '', component: CounsellingComponent },
      { path: 'problem', component: ProblemComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounsellingRoutingModule { }
