import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TODOListComponent } from './todo-list.component';

const routes: Routes = [
  { path: '',
  component: TODOListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TODOListRoutingModule { }
