import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelogrammaComponent } from './parallelogramma.component';

describe('ParallelogrammaComponent', () => {
  let component: ParallelogrammaComponent;
  let fixture: ComponentFixture<ParallelogrammaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallelogrammaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelogrammaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
