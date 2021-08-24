import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KumotoComponent } from './kumoto.component';

describe('KumotoComponent', () => {
  let component: KumotoComponent;
  let fixture: ComponentFixture<KumotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KumotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KumotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
