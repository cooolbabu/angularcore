import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalHomeComponent } from './original-home.component';

describe('OriginalHomeComponent', () => {
  let component: OriginalHomeComponent;
  let fixture: ComponentFixture<OriginalHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OriginalHomeComponent]
    });
    fixture = TestBed.createComponent(OriginalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
