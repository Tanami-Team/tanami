import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTanamiComponent } from './header-tanami.component';

describe('HeaderTanamiComponent', () => {
  let component: HeaderTanamiComponent;
  let fixture: ComponentFixture<HeaderTanamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTanamiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTanamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
