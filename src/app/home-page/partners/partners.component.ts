import { Component, Input, OnInit } from '@angular/core';
import { Partner } from '../../../common/partners.model';
import { PartnerService } from '../../services/partner.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  // @Input() partnersItem: Partner;
  partners: Partner[];
  constructor(private partnerService: PartnerService) {}

  ngOnInit() {
    this.partnerService.getPartners().subscribe((partners) => {
      this.partners = partners;
    });
  }
}
