import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatpageComponent } from './teatpage.component';

describe('TeatpageComponent', () => {
  let component: TeatpageComponent;
  let fixture: ComponentFixture<TeatpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeatpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeatpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
