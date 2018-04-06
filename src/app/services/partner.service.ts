import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partner } from '../../common/partners.model';

@Injectable()

export class PartnerService {
  constructor(private http: HttpClient) { }

  getPartners() {
    return this.http.get<Partner[]>(`api/partner/partners-list`);
  }
}
