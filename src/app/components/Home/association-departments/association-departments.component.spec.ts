import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationDepartmentsComponent } from './association-departments.component';

describe('AssociationDepartmentsComponent', () => {
  let component: AssociationDepartmentsComponent;
  let fixture: ComponentFixture<AssociationDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociationDepartmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociationDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
