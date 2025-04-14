import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedNumbersComponent } from './highlighted-numbers.component';

describe('HighlightedNumbersComponent', () => {
  let component: HighlightedNumbersComponent;
  let fixture: ComponentFixture<HighlightedNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightedNumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightedNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
