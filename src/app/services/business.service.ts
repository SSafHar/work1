import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Business } from '../../common/business.model';

@Injectable()

export class BusinessService {
  constructor(private http: HttpClient) { }

  getBusiness() {
    return this.http.get<Business[]>(`api/business/business-item`);
  }
}
