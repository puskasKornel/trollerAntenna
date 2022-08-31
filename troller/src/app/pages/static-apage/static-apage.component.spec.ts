import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticAPageComponent } from './static-apage.component';

describe('StaticAPageComponent', () => {
  let component: StaticAPageComponent;
  let fixture: ComponentFixture<StaticAPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticAPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticAPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
