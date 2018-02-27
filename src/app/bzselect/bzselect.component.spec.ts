import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzselectComponent } from './bzselect.component';

describe('BzselectComponent', () => {
  let component: BzselectComponent;
  let fixture: ComponentFixture<BzselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BzselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
