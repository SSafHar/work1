import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      link: 'home'
    }, {
      label: 'Services',
      link: 'services'
    }, {
      label: 'Business in Armenia',
      link: 'portfolio'
    }, {
      label: 'Reforms',
      link: 'team'
    }, {
      label: 'About',
      link: 'career'
    }, {
      label: 'Contact Us',
      link: 'contact'
    }];
}
