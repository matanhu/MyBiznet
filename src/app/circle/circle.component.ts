import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
            <div class="circle-container">
              <div class="circle-border" [ngClass]="{'is-success': isSuccess}">
                <div class="small-icon-container">
                  <div class="small-img-container">
                    <img src="http://via.placeholder.com/12x12" alt="">
                  </div>
                </div>
                <div class="img-container">
                  <img src="http://via.placeholder.com/40x40" alt="">
                </div>
              </div>
              <div class="label">{{labelText}}</div>
            </div>
  `,
  styles: [
    `
    .circle-border {
      height: 96px;
      width: 96px;
      border: 3px solid #ff769d;
      border-radius: 50%;
      position: relative;
      background-color: #fff;
      margin: auto;
    }
    .is-success.circle-border {
      border-color: #adeaad;
    }
    .small-icon-container {
      width: 34px;
      height: 34px;
      position: absolute;
      background-color: #ff2866;
      border-radius: 50%;
      right: -0.5em;
    }
    .is-success .small-icon-container{
      background-color: #7fde7f;
    }
    .small-img-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .img-container {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .label {
      text-align: center;
      font-size: 18px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1;
      letter-spacing: normal;
      margin-top: 1em;
      color: #3d3d3d;
    }
  `
  ]
})
export class CircleComponent implements OnInit {
  @Input() isSuccess = false;
  @Input() labelText = '';
  constructor() {}

  ngOnInit() {}
}
