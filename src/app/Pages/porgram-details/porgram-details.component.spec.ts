import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorgramDetailsComponent } from './porgram-details.component';

describe('PorgramDetailsComponent', () => {
  let component: PorgramDetailsComponent;
  let fixture: ComponentFixture<PorgramDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorgramDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorgramDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
