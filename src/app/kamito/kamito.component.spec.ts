import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamitoComponent } from './kamito.component';

describe('KamitoComponent', () => {
  let component: KamitoComponent;
  let fixture: ComponentFixture<KamitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KamitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KamitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
