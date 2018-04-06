import { Component, OnInit } from '@angular/core';
import { Location } from '../../../common/location.model';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  locations: Location[];
  selectedLocation: Location;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe((locations) => {
      this.locations = locations;
      this.selectedLocation = locations[0];
    });
  }

  selectLocation(location: Location) {
    this.selectedLocation = location;
  }
}
