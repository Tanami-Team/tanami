import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorgramCardComponent } from './porgram-card.component';

describe('PorgramCardComponent', () => {
  let component: PorgramCardComponent;
  let fixture: ComponentFixture<PorgramCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorgramCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorgramCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
