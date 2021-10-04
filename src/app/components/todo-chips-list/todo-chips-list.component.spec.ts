import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TODOChipsListComponent } from './todo-chips-list.component';

describe('TODOChipsListComponent', () => {
  let component: TODOChipsListComponent;
  let fixture: ComponentFixture<TODOChipsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TODOChipsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TODOChipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
