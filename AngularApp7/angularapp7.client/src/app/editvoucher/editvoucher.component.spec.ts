import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvoucherComponent } from './editvoucher.component';

describe('EditvoucherComponent', () => {
  let component: EditvoucherComponent;
  let fixture: ComponentFixture<EditvoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditvoucherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
