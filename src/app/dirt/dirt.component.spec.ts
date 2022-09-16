import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtComponent } from './dirt.component';

describe('DirtComponent', () => {
  let component: DirtComponent;
  let fixture: ComponentFixture<DirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
