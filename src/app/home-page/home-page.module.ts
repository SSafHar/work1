import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BusinessComponent } from './business/business.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeServiceCardComponent } from './home-service-card/home-service-card.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeServiceCardComponent,
    PartnersComponent,
    BusinessComponent,
    BannerComponent
  ]
})
export class HomePageModule {
}
