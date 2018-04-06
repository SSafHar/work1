import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banner } from '../../common/banner.model';

@Injectable()

export class BannerService {
  constructor(private http: HttpClient) { }

  getBanner() {
    return this.http.get<Banner[]>(`api/banner/list`);
  }
}
