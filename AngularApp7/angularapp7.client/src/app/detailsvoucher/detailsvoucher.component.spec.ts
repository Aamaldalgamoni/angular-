import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsvoucherComponent } from './detailsvoucher.component';

describe('DetailsvoucherComponent', () => {
  let component: DetailsvoucherComponent;
  let fixture: ComponentFixture<DetailsvoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsvoucherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
