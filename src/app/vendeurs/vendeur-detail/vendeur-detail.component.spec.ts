import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeurDetailComponent } from './vendeur-detail.component';

describe('VendeurDetailComponent', () => {
  let component: VendeurDetailComponent;
  let fixture: ComponentFixture<VendeurDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendeurDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
