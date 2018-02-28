import { Component, OnInit, HostBinding,  ChangeDetectionStrategy, Input, HostListener} from '@angular/core';

@Component({
  selector: 'app-menu-button',
  template: `
    <a [ngClass]="{'hover': mouseIn}" [routerLink]="routerTo" [routerLinkActive]="['active-link']">
      <div class="row button-container">
        <div class="border-right"></div>
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
      padding: 1em 0;
      cursor: pointer;
      transition: padding .5s;
      position: relative;
    }

    .border-right {
      /*border-right: 4px solid #52bff4;*/
      position: absolute;
      right: 0;
      height: 2.5em;
      top: 50%;
      transform: translate(0,-50%);
      background-color: #52bff4;
      width: 2px;
      display: none;
    }

    .active-link .button-container .border-right {
      display: block;
    }

    a:focus .button-container, .hover .button-container, .active-link .button-container{
      padding-right: 1em;
      background-image: linear-gradient(to top, #222b38, #1c232e);
    }

    .text {
      font-size: 1em;
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
