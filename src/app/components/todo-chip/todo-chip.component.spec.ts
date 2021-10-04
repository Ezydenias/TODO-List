import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TODOChipComponent } from './todo-chip.component';

describe('TODOChipComponent', () => {
  let component: TODOChipComponent;
  let fixture: ComponentFixture<TODOChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TODOChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TODOChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
