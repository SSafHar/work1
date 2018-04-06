import { Component, OnInit } from '@angular/core';
import { Banner } from '../../../common/banner.model';
import { BannerService } from '../../services/banner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  banners: Banner[];

  constructor(private bannerService: BannerService) {}

  ngOnInit() {
    this.bannerService.getBanner().subscribe((banners) =>  {
      this.banners = banners;
    });
  }
}

