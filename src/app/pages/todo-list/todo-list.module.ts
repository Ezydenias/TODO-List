import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TODOListRoutingModule } from './todo-list-routing.module';
import { TODOListComponent } from '../todo-list/todo-list.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [TODOListComponent],
  imports: [
    CommonModule,
    TODOListRoutingModule,
    ComponentsModule,
    MatMenuModule,
    MatDialogModule,
  ],
  providers: [DatePipe]
})
export class TODOListModule {}
