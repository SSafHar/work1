import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomeServiceCard } from '../../common/home-service-card.model';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) { }

  getHomeServiceCards() {
    return this.http.get<HomeServiceCard[]>(`api/home/service-cards`);
  }
}
