import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerchioComponent } from './cerchio.component';

describe('CerchioComponent', () => {
  let component: CerchioComponent;
  let fixture: ComponentFixture<CerchioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerchioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerchioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
