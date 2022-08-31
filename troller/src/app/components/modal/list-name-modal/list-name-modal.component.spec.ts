import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNameModalComponent } from './list-name-modal.component';

describe('ListNameModalComponent', () => {
  let component: ListNameModalComponent;
  let fixture: ComponentFixture<ListNameModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNameModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
