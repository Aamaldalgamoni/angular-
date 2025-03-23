import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatvoucherComponent } from './creatvoucher.component';

describe('CreatvoucherComponent', () => {
  let component: CreatvoucherComponent;
  let fixture: ComponentFixture<CreatvoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatvoucherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
