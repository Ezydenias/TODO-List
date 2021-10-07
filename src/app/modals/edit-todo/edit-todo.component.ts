import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.dialogRef.disableClose = true;

    //creating the From Group Elements
    this.taskForm = new FormGroup({
      label: new FormControl(null, [Validators.required]),
      todo: new FormControl(null, [Validators.required]),
      dueDate: new FormControl(null, [Validators.required]),
    });

    //patches the value with the values gotten by the parent component
    this.taskForm.patchValue({
      label: this.data.todo.Label,
      todo: this.data.todo.TODO,
      dueDate: this.datePipe.transform(this.data.todo.DueDate, 'yyyy-MM-dd'),
    });
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close('roo-burger');
  }

  //closes the dialog and tells the parent component to do nothing
  closeDialog() {
    this.dialogRef.close();
  }

  saveTask() {
    //if the ID was 0 it makes a new object using the newId value since this is a new entry
    if (this.data.todo.Id == 0) {
      this.dialogRef.close({
        Id: this.data.newId,
        Label: this.taskForm.get('label')?.value,
        TODO: this.taskForm.get('todo')?.value,
        State: this.data.todo.State,
        DueDate: this.taskForm.get('dueDate')?.value,
      });
      //else it will uise the Id given in todo since it is updating an old entry
    } else {
      this.dialogRef.close({
        Id: this.data.todo.Id,
        Label: this.taskForm.get('label')?.value,
        TODO: this.taskForm.get('todo')?.value,
        State: this.data.todo.State,
        DueDate: this.taskForm.get('dueDate')?.value,
      });
    }
  }
}
