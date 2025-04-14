import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanamiVersionComponent } from './tanami-version.component';

describe('TanamiVersionComponent', () => {
  let component: TanamiVersionComponent;
  let fixture: ComponentFixture<TanamiVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanamiVersionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanamiVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
