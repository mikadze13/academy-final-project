import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { PageNotFoundComponent } from './Action/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Action/orders/orders.module').then((m) => m.OrdersModule),
  } ,
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
