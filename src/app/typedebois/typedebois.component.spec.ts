import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedeboisComponent } from './typedebois.component';

describe('TypedeboisComponent', () => {
  let component: TypedeboisComponent;
  let fixture: ComponentFixture<TypedeboisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypedeboisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypedeboisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
