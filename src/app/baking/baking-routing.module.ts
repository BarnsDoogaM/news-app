import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BakingComponent } from './baking.component';

const routes: Routes = [
  { path: '', children: [
   

    {
      path: '', component: BakingComponent
    },
    {
      path: 'baking', component: BakingComponent
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BakingRoutingModule { }
