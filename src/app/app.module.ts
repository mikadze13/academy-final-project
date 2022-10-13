import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageTemplateComponent } from './fakeTextMessage/message-template/message-template.component';
import { BatteryComponent } from './fakeTextMessage/battery/battery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {MatExpansionModule} from '@angular/material/expansion';
import { HighlightDirective } from './fakeTextMessage/highlight.directive';
import { ConnectionComponent } from './fakeTextMessage/connection/connection.component';
import { SettingsComponent } from './fakeTextMessage/settings/settings.component';
import { ConversationComponent } from './fakeTextMessage/conversation/conversation.component';  
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import { HomepagessComponent } from './Action/homepagess/homepagess.component'; 
import { NavbarComponent } from './Action/navbar/navbar.component';
import { FirstTemplateComponent } from './Action/homepagess/first-template/first-template.component';
import { EventComponent } from './Action/homepagess/event/event.component';  
import { ServicessComponent } from './Action/homepagess/servicess/servicess.component'; 
import { AboutComponent } from './Action/homepagess/about/about.component';
import { PricingComponent } from './Action/homepagess/pricing/pricing.component';
import { FooterComponent } from './Action/footer/footer.component';
import { ServicesComponent } from './Action/services/services.component';
import { PageNotFoundComponent } from './Action/page-not-found/page-not-found.component';
import { FtemplateComponent } from './Action/services/ftemplate/ftemplate.component';
import { ServiceitemComponent } from './Action/services/serviceitem/serviceitem.component';
import { WhyusComponent } from './Action/services/whyus/whyus.component';
import { ApipageComponent } from './Action/apipage/apipage.component';
import { SpinnerComponent } from './Action/spinner/spinner.component';
import { LoadingInterceptor } from './Action/loadinginterceptor/loading.interceptor';
import { CardComponent } from './Action/apipage/card/card.component';   
import {NgxPaginationModule} from 'ngx-pagination';
import { CurrencyApiComponent } from './Action/currency-api/currency-api.component';
import { AllCryptoComponent } from './Action/currency-api/all-crypto/all-crypto.component';
import { NumberSuffixPipe } from './pipe/number-suffix.pipe';
import { ContactPageComponent } from './Action/contact-page/contact-page.component'; 
@NgModule({
  declarations: [
    AppComponent,
    MessageTemplateComponent,
    BatteryComponent,
    HighlightDirective,
    ConnectionComponent,
    SettingsComponent,
    ConversationComponent, 
    HomepagessComponent, 
    NavbarComponent,
    FirstTemplateComponent,
    EventComponent,   
    ServicessComponent,
     AboutComponent,
     PricingComponent,
     FooterComponent,
     ServicesComponent,
     PageNotFoundComponent,
     FtemplateComponent,
     ServiceitemComponent,
     WhyusComponent,
     ApipageComponent,
     SpinnerComponent,
     CardComponent,
     CurrencyApiComponent,
     AllCryptoComponent,
     NumberSuffixPipe,
     ContactPageComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule ,
    MatSlideToggleModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule ,
    NgxPaginationModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
