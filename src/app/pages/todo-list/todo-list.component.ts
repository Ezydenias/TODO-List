import { Component, OnInit, ViewChild } from '@angular/core';
import { ITODO } from 'src/app/interfaces/ITODO';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoComponent } from 'src/app/modals/edit-todo/edit-todo.component';
import { ClearTodosComponent } from 'src/app/modals/clear-todos/clear-todos.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TODOListComponent implements OnInit {
  todos: ITODO[] = [
    {
      Id: 4,
      Label: 'roo you too',
      TODO: 'romo',
      State: false,
      DueDate: new Date(),
    },
    {
      Id: 5,
      Label: 'drink with an wallaroo',
      TODO: 'drink him under the table',
      State: false,
      DueDate: new Date('December 17, 1995 03:24:00'),
    },
  ];

  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  constructor(public dialog: MatDialog, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.loadTable();
    //this.sortTable();
  }

  //updates table with new content
  updateTable(table: ITODO[]) {
    this.todos = table;
    // this.sortTable();
    this.saveTable();
  }

  //laods table from the local storage
  loadTable() {
    const retrievedData = localStorage.getItem('todos');
    if (retrievedData != null) {
      this.todos = JSON.parse(retrievedData);
    } else {
      console.log('no save');
    }
  }

  //saves table on the local storage
  saveTable() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  //this was supposed th sort the local table so the checked tasks where all on the bottom of the list, but it didn't worked out
  sortTable() {
    this.todos.sort((a, b) => (a.State != b.State ? 1 : -1));
  }

  //clears todo table from all entries that are marked as done, if a server was connected a service would be created to handle this
  clearTodoTable() {
    let found = 1;
    while (found > 0) {
      found = 0;
      for (let index = 0; index < this.todos.length; index++) {
        if (this.todos[index].State) {
          found++;
          this.todos.splice(index, 1);
        }
      }
    }
    this.saveTable();
  }

  //gives a new unused Id
  getNewId(): number {
    //A really dumb implementation used to mimic the server behaivor, if a server was used this would use a service to get the next available Id from the server directly (probably)
    let i = 1;
    while (i < this.todos.length) {
      if (!this.todos[this.todos.findIndex((obj) => obj.Id == i)]) {
        return i;
      }
      i++;
    }
    return this.todos.length + 1;
  }

  //opens new/edit Todo Dialog, depending on if it is an existing entry or a new entry
  openTodoDialog(newEntry: boolean, Id: number): void {
    const dialogRef = this.dialog.open(EditTodoComponent, {
      data: {
        todo: newEntry
          ? {
              Id: 0,
              Label: '',
              TODO: '',
              State: false,
              DueDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
            }
          : this.todos[this.todos.findIndex((obj) => obj.Id == Id)],
        newId: newEntry ? this.getNewId() : 0,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      //Simple Check for result being the correct type for use
      if (typeof result === 'object') {
        //makes a new enty if entry is new
        if (newEntry) {
          this.todos.push(result);
        } else {
          //looks for the corresponding entry and overwrites it
          const index = this.todos.findIndex((obj) => obj.Id == result.Id);
          this.todos[index] = result;
        }
        this.saveTable();
      }
    });
  }

  //opens clear Todo Dialog
  openClearDialog(): void {
    const dialogRef = this.dialog.open(ClearTodosComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.clearTodoTable();
      }
    });
  }

  //Deprecated, just for show
  contextMenuPosition = { x: '0px', y: '0px' };

  onContextMenu(value: any) {
    const x = value.event.clientX;
    const y = value.event.clientY;

    value.event.preventDefault();
    this.contextMenuPosition.x = x + 'px';
    this.contextMenuPosition.y = y + 'px';
    this.contextMenu.menuData = { item: value.item };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  onContextMenuAction1(item: ITODO) {
    this.openTodoDialog(false, item.Id);
  }

  onContextMenuAction2(item: ITODO) {
    const index = this.todos.findIndex((obj) => obj.Id == item.Id);
    this.todos[index].State = false;
  }

  editTodo(id: number) {
    this.openTodoDialog(false, id);
  }
}
