import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';

import localePt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalDateTimePipe } from './pipe/local-date-time.pipe';
import { LocalDateTimeModule } from './pipe/local-date-time.module';
import { NgPipesModule, ReversePipe } from 'ngx-pipes';
import { SwiperModule } from "swiper/angular";


registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, CommonModule, FormsModule, NgPipesModule, ReactiveFormsModule, SwiperModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              {provide: LOCALE_ID, useValue: 'pt-br' },
              CookieService,ReversePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
