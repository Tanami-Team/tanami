import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanamiinitiativeComponent } from './tanamiinitiative.component';

describe('TanamiinitiativeComponent', () => {
  let component: TanamiinitiativeComponent;
  let fixture: ComponentFixture<TanamiinitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanamiinitiativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanamiinitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
