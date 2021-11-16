import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCompanyComponent } from './m-company.component';

describe('MCompanyComponent', () => {
  let component: MCompanyComponent;
  let fixture: ComponentFixture<MCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
