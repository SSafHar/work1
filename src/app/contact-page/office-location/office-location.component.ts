import { Component, Input } from '@angular/core';
import { Location } from '../../../common/location.model';

@Component({
  selector: 'app-office-location',
  templateUrl: './office-location.component.html',
  styleUrls: ['./office-location.component.scss']
})
export class OfficeLocationComponent {
  @Input() location: Location;
}
