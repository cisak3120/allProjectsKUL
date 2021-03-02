import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherNextComponent } from './weather-next.component';

describe('WeatherNextComponent', () => {
  let component: WeatherNextComponent;
  let fixture: ComponentFixture<WeatherNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
