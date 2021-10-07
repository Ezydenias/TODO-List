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
  @Output() onEditTodo = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  //when crossed out makes sure the data is also crossed out in their table and emits the new table to the parent class
  crossedOut(Id:number)
  {
    const index = this.todos.findIndex(obj => obj.Id == Id);
    this.todos[index].State=true;
    this.updatedTable.emit(this.todos);
  }

  //when item is togled emmiots the whole list to the parent directive to keep information consistent
  toggled(Id:number){
    this.updatedTable.emit(this.todos);
  }

  //this was used to give the content menu the correct data and position, this was dropped and just remains here as example code
  onContextMenu(event: MouseEvent, item: ITODO) {
    this.OnContextMenu.emit({event,item});
  }

    //throws an even for the edit dialog to be handled in the parent component
  editTodo(id: number){
    this.onEditTodo.emit(id);
  }
}
