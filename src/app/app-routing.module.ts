import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PricingRoutingModule } from './pricing/pricing-routing.module';
import { CounsellingRoutingModule } from './counselling/counselling-routing.module';
import { BakingRoutingModule } from './baking/baking-routing.module';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
 
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
 
  { path: 'pricing', loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule) },
  { path: 'counselling', loadChildren: () => import('./counselling/counselling.module').then(m => m.CounsellingModule) },
  { path: 'baking', loadChildren: () => import('./baking/baking.module').then(m => m.BakingModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
 {
  path: '**', component: ErrorComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    
  exports: [RouterModule]
})
export class AppRoutingModule { }
