import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TODOChipsListComponent } from './todo-chips-list/todo-chips-list.component';
import { TODOChipComponent } from './todo-chip/todo-chip.component';

//this module contains all the components of the components/...

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [TODOChipsListComponent, TODOChipComponent],
  exports: [TODOChipsListComponent, TODOChipComponent],
})
export class ComponentsModule {}
