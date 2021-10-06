import { Component, OnInit, ViewChild } from '@angular/core';
import { ITODO } from 'src/app/interfaces/ITODO';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoComponent } from 'src/app/modals/edit-todo/edit-todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TODOListComponent implements OnInit {
  todos: ITODO[] = [
    { Id: 4, Label: 'roo you too', TODO: '', State: false, DueDate: new Date() },
    { Id: 5, Label: 'drink with an wallaroo', TODO: '', State: false, DueDate: new Date() },
  ];

  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateTable(table:ITODO[]){
    this.todos = table;
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(EditTodoComponent, {
      // width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  contextMenuPosition = { x: '0px', y: '0px' };

  onContextMenu(value: any) {

    const x = (value.event.clientX);
    const y = (value.event.clientY);

    // console.log(x);
    // console.log(y);

    value.event.preventDefault();
    this.contextMenuPosition.x = x + 'px';
    this.contextMenuPosition.y = y + 'px';
    this.contextMenu.menuData = { 'item': value.item };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();

    // console.log(this.contextMenuPosition.x);
    // console.log(this.contextMenuPosition.y);
  }

  onContextMenuAction1(item: ITODO) {
    alert(`Click to edit ${item.Label}`);
  }

  onContextMenuAction2(item: ITODO) {
    const index = this.todos.findIndex(obj => obj.Id == item.Id);
    this.todos[index].State = false;
  }

}
