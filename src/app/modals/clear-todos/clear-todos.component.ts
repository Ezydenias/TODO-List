import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-clear-todos',
  templateUrl: './clear-todos.component.html',
  styleUrls: ['./clear-todos.component.scss'],
})
export class ClearTodosComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ClearTodosComponent>) {}

  ngOnInit(): void {}

  //closes the dialog telling the parrent component to clear the todo list from the done todos
  clearTodos() {
    this.dialogRef.close(true);
  }

  //closes the dialog telling the parrent component to do nothing
  closeDialog() {
    this.dialogRef.close(false);
  }
}
