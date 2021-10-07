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

  clearTodos() {
    this.dialogRef.close(true);
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
