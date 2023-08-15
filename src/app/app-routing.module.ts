import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
 

  {
    path: 'home', component: HomeComponent
  },
 
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {
    path: '', component: HomeComponent
  },
 {
  path: '**', component: ErrorComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    
  exports: [RouterModule]
})
export class AppRoutingModule { }
