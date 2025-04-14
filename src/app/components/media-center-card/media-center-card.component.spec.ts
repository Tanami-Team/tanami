import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCenterCardComponent } from './media-center-card.component';

describe('MediaCenterCardComponent', () => {
  let component: MediaCenterCardComponent;
  let fixture: ComponentFixture<MediaCenterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaCenterCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaCenterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
