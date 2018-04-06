import { Component, OnInit } from '@angular/core';
import { Business } from '../../../common/business.model';
import { BusinessService } from '../../services/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  businesses: Business[];
  constructor(private businessService: BusinessService) {}

  ngOnInit() {
    this.businessService.getBusiness().subscribe((business) => {
      this.businesses = business;
    });
  }
}
