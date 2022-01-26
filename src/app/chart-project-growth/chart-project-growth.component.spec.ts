import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartProjectGrowthComponent } from './chart-project-growth.component';

describe('ChartProjectGrowthComponent', () => {
  let component: ChartProjectGrowthComponent;
  let fixture: ComponentFixture<ChartProjectGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartProjectGrowthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartProjectGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
