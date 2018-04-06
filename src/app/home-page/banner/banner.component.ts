import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, Input, OnChanges } from '@angular/core';
import { Animate, Banner } from '../../../common/banner.model';

type Direction = -1 | 0 | 1;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('slide', [
      state('*', style({
        visibility: 'hidden'
      })),
      state('current', style({
        left: 0,
        visibility: 'visible'
      })),
      state('previous', style({
        left: '-100%',
        visibility: 'hidden'
      })),
      state('next', style({
        left: '100%',
        visibility: 'hidden'
      })),
      transition('* <=> *', animate('150ms ease-in'))
    ])
  ]
})
export class BannerComponent implements OnChanges {
  @Input() banners: Animate<Banner>[] = null;
  @HostBinding('class.no-banners') noBanners = true;
  selectionTarget: number;
  direction: Direction = 0;
  currentInd: number;
  lastInd: number;

  ngOnChanges(changes) {
    if(!changes.banners) {
      return;
    }

    const noBanners = !this.banners || !this.banners.length;
    this.noBanners = noBanners;

    if(noBanners) {
      return;
    }

    this.lastInd = this.banners.length - 1;
    this.selectionTarget = 0;
    this.currentInd = -1;
    this.setStates();
  }

  previousBanner() {
    if(this.currentInd <= 0) {
      this.selectionTarget = this.lastInd;
    } else {
      this.selectionTarget = this.currentInd - 1;
    }
    this.setStates();
  }

  nextBanner() {
    if(this.currentInd >= this.lastInd) {
      this.selectionTarget = 0;
    } else {
      this.selectionTarget = this.currentInd + 1;
    }
    this.setStates();
  }

  selectBanner(index) {
    this.selectionTarget = index;
    this.setStates();
  }

  setNextStates(ev: AnimationEvent) {
    if(ev.toState !== 'current') {
      return;
    }

    this.setStates();
  }

  private setStates() {
    const {lastInd, selectionTarget} = this;
    let {currentInd, direction} = this;

    if(currentInd === selectionTarget) {
      this.direction = 0;
      return;
    }

    if(!direction) {
      this.direction = direction = currentInd < selectionTarget ? 1 : -1;
    }

    this.currentInd = currentInd = currentInd + direction;

    const current = this.banners[currentInd];
    current.animationState = 'current';

    const previous = currentInd === 0 ? this.banners[lastInd] : this.banners[currentInd - 1];
    previous.animationState = 'previous';

    const next = currentInd === lastInd ? this.banners[0] : this.banners[currentInd + 1];
    next.animationState = 'next';
  }
}
