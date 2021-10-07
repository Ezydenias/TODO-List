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

  //sets todo to done state and emits event to keep the table content consistent trough all components
  crossOut() {
    this.todo.State = true;
    this.crossed.emit(this.todo.Id);
  }

  //toggles state and emits event to keep the table content consistent trough all components
  toggle() {
    this.todo.State = !this.todo.State;
    this.toggled.emit(this.todo.Id);
  }

  //throws an even for the edit dialog to be handled in the parent component
  editTodo() {
    this.onEditTodo.emit(this.todo.Id);
  }

  isToday(date: Date): boolean {
    //Datepipes is used to format the dates to be comparitivly to each other
    const currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    const inputDate = this.datePipe.transform(date, 'yyyy-MM-dd');

    //If date is before today true is returned
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
