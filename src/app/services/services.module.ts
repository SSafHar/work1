import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BusinessService } from './business.service';
import { HomeService } from './home.service';
import { BannerService } from './banner';
import { JobService } from './job.service';
import { LocationService } from './location.service';
import { MainInterceptorService } from './main-interceptor.service';
import { PartnerService } from './partner.service';
import { PortfolioService } from './portfolio.service';
import { ServicesService } from './services.service';
import { TeamService } from './team.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptorService,
      multi: true
    },
    TeamService,
    ServicesService,
    LocationService,
    JobService,
    PortfolioService,
    HomeService,
    PartnerService,
    BusinessService,
    BannerService
  ]
})
export class ServicesModule {
}
