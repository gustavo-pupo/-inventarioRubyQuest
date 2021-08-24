import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaelleComponent } from './raelle.component';

describe('RaelleComponent', () => {
  let component: RaelleComponent;
  let fixture: ComponentFixture<RaelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
