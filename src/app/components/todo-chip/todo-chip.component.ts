import { DatePipe } from '@angular/common';
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
  @Output() toggled = new EventEmitter<number>();
  @Output() onEditTodo = new EventEmitter<number>();

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}

  crossOut() {
    this.todo.State = true;
    this.crossed.emit(this.todo.Id);
  }

  toggle() {
    this.todo.State = !this.todo.State;
    this.toggled.emit(this.todo.Id);
  }

  editTodo() {
    this.onEditTodo.emit(this.todo.Id);
  }

  isToday(date: Date): boolean {
    const currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    const inputDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    if (currentDate != null && inputDate != null) {
      if (inputDate < currentDate) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
