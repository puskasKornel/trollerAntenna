import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticBPageComponent } from './static-bpage.component';

describe('StaticBPageComponent', () => {
  let component: StaticBPageComponent;
  let fixture: ComponentFixture<StaticBPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticBPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticBPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
