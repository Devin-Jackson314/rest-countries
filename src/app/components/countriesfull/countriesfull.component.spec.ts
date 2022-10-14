import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesfullComponent } from './countriesfull.component';

describe('CountriesfullComponent', () => {
  let component: CountriesfullComponent;
  let fixture: ComponentFixture<CountriesfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesfullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
