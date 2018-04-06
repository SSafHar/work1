import { Component, Input, OnInit } from '@angular/core';
import { HomeServiceCard } from '../../../common/home-service-card.model';
import { Partner } from '../../../common/partners.model';
import { HomeService } from '../../services/home.service';
import { PartnerService } from '../../services/partner.service';

@Component({
  selector: 'app-home-service-card',
  templateUrl: './home-service-card.component.html',
  styleUrls: ['./home-service-card.component.scss']
})

export class HomeServiceCardComponent implements OnInit {
  homeServiceCards: HomeServiceCard[];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getHomeServiceCards()
        .subscribe((cards) => {
          this.homeServiceCards = cards;
        });
  }
}
