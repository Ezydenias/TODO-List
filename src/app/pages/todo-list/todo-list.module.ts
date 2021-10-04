import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TODOListRoutingModule } from './todo-list-routing.module';
import { TODOListComponent } from '../todo-list/todo-list.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    TODOListComponent
  ],
  imports: [
    CommonModule,
    TODOListRoutingModule,
    ComponentsModule,
  ]
})
export class TODOListModule { }
