import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanamiTechComponent } from './tanami-tech.component';

describe('TanamiTechComponent', () => {
  let component: TanamiTechComponent;
  let fixture: ComponentFixture<TanamiTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanamiTechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanamiTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
