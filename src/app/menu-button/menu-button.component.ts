import { Component, OnInit, HostBinding,  ChangeDetectionStrategy, Input, HostListener} from '@angular/core';

@Component({
  selector: 'app-menu-button',
  template: `
    <a [ngClass]="{'hover': mouseIn}" [routerLink]="routerTo" [routerLinkActive]="['active-link']">
      <div class="row button-container">
        <div class="col-lg-2 col-md-2 col-sm-2">
          <img src="http://via.placeholder.com/18x18" alt="">
        </div>
        <div class="col-lg-10 col-md-10 col-sm-10 text">
          {{title}}
        </div>
      </div>
    </a>
  `,
  styles: [`
    .button-container {
      padding: 24px 0;
      cursor: pointer;
      transition: padding .5s;
    }

    a:focus .button-container, .hover .button-container, .button-container.active-link{
      padding-right: 1em;
      border-right: 4px solid #52bff4;
    }

    .text {
      font-size: 15px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      color: #cccccc;
    }
    .hover .text, .active-link .text{
      color: #52bff4;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuButtonComponent implements OnInit {
  @Input() routerTo;
  @Input() title: string;
  public mouseIn = false;
  constructor() { }

  ngOnInit() {
    console.log(this.routerTo);
  }

  @HostListener('mouseover')
  onMouseEnter() {
    this.mouseIn = true;
  }

  @HostListener('blur')
  @HostListener('mouseleave')
  onMouseLeave() {
    this.mouseIn = false;
  }

}
