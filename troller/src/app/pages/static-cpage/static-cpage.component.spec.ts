import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticCPageComponent } from './static-cpage.component';

describe('StaticCPageComponent', () => {
  let component: StaticCPageComponent;
  let fixture: ComponentFixture<StaticCPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticCPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticCPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
