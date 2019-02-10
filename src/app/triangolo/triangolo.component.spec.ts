import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangoloComponent } from './triangolo.component';

describe('TriangoloComponent', () => {
  let component: TriangoloComponent;
  let fixture: ComponentFixture<TriangoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriangoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
