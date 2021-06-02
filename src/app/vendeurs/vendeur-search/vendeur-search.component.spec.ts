import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeurSearchComponent } from './vendeur-search.component';

describe('VendeurSearchComponent', () => {
  let component: VendeurSearchComponent;
  let fixture: ComponentFixture<VendeurSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendeurSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeurSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
