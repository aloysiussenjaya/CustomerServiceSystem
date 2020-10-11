import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinjamanPageComponent } from './pinjaman-page.component';

describe('PinjamanPageComponent', () => {
  let component: PinjamanPageComponent;
  let fixture: ComponentFixture<PinjamanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinjamanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinjamanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
