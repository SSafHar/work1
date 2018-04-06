import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../../common/location.model';

@Injectable()
export class LocationService {
  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get<Location[]>(`api/location/list`);
  }
}
