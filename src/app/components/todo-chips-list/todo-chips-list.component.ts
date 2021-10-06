import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITODO } from 'src/app/interfaces/ITODO';

@Component({
  selector: 'app-todo-chips-list',
  templateUrl: './todo-chips-list.component.html',
  styleUrls: ['./todo-chips-list.component.scss'],
})
export class TODOChipsListComponent implements OnInit {
  @Input() todos: ITODO[] = [
    { Id: 1, Label: 'eat shit', TODO: '', State: false, DueDate: new Date() },
    { Id: 2, Label: 'paint humans', TODO: '', State: false, DueDate: new Date() },
    { Id: 3, Label: 'draw', TODO: '', State: false, DueDate: new Date() },
    { Id: 4, Label: 'roo', TODO: '', State: false, DueDate: new Date() },
    { Id: 5, Label: 'eat wallaroo', TODO: '', State: false, DueDate: new Date() },
  ];
  @Output() updatedTable = new EventEmitter<ITODO[]>();
  @Output() OnContextMenu = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  crossedOut(Id:number)
  {
    const index = this.todos.findIndex(obj => obj.Id == Id);
    this.todos[index].State=true;
    this.updatedTable.emit(this.todos);
  }

  onContextMenu(event: MouseEvent, item: ITODO) {

    // console.log(event.movementX);
    // console.log(event.screenY);
    this.OnContextMenu.emit({event,item});
  }
}
