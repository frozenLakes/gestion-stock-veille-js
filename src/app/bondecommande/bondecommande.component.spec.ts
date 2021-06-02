import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondecommandeComponent } from './bondecommande.component';

describe('BondecommandeComponent', () => {
  let component: BondecommandeComponent;
  let fixture: ComponentFixture<BondecommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondecommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BondecommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
