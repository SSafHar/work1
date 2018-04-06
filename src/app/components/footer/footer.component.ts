import { Component } from '@angular/core';

export interface FooterItem {
  menu: FooterMenu[];
  copyright: string;
  name: string;
  phone: string;
}

export interface FooterMenu {
  label: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerItems: any = {
    menu: [
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
      }],
    copyright: 'Copyright 2017-2018.JAF',
    name: 'Jurisdiction Armenia Foundation',
    phone: '+374 (92) 89 89 32'
  };
}
