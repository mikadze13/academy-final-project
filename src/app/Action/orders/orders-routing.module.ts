import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageTemplateComponent } from 'src/app/fakeTextMessage/message-template/message-template.component';
import { ApipageComponent } from '../apipage/apipage.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { CurrencyApiComponent } from '../currency-api/currency-api.component';
import { HomepagessComponent } from '../homepagess/homepagess.component';
import { ServicessComponent } from '../homepagess/servicess/servicess.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ServicesComponent } from '../services/services.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomepagessComponent,
  },
  { path: 'apipage', component: ApipageComponent },
  {path:'CurrencyApi',component:CurrencyApiComponent},
  {path:'ContactUs',component:ContactPageComponent},
  { path: 'services', component: ServicesComponent },
  { path: 'Message/Project', component: MessageTemplateComponent },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
