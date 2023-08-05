import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingComponent } from './pricing.component';
import { GoodComponent } from './good/good.component';
import { PricingModule } from './pricing.module';
import { BarnsComponent } from './mough/barns/barns.component';

const routes: Routes = [

 
    { path: '',  children:[
      { path: '', component: PricingComponent },
      { path: 'good', component: GoodComponent },
      { path: 'barns', component: BarnsComponent }
    ]},
   

];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  
  exports: [RouterModule]
})
export class PricingRoutingModule { }
