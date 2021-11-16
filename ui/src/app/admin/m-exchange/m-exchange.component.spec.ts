import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MExchangeComponent } from './m-exchange.component';

describe('MExchangeComponent', () => {
  let component: MExchangeComponent;
  let fixture: ComponentFixture<MExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
