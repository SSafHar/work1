import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

const exportedComponents = [
  NavComponent,
  FooterComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  declarations: exportedComponents,
  exports: exportedComponents
})
export class ComponentsModule {}
