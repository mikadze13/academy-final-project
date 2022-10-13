import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Action/orders/orders.module').then((m) => m.OrdersModule),
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
