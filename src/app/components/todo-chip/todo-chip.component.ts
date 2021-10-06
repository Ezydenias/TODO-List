import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITODO } from 'src/app/interfaces/ITODO';

@Component({
  selector: 'app-todo-chip',
  templateUrl: './todo-chip.component.html',
  styleUrls: ['./todo-chip.component.scss'],
})
export class TODOChipComponent implements OnInit {
  @Input() todo: ITODO = {
    Id: 0,
    Label: 'Chip',
    TODO: '',
    State: false,
    DueDate: new Date(),
  };
  @Output() crossed = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  crossOut() {
    this.todo.State = true;
    this.crossed.emit(this.todo.Id);
  }
}
