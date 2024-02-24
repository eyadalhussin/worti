import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWordComponent } from './edit-word.component';

describe('EditWordComponent', () => {
  let component: EditWordComponent;
  let fixture: ComponentFixture<EditWordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditWordComponent]
    });
    fixture = TestBed.createComponent(EditWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
