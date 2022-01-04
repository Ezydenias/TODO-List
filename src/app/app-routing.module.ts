import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'TODO', // It pointed to the blank page
    pathMatch: 'full',
  },
  {
    path: 'TODO',
    loadChildren: () =>
      import('./pages/todo-list/todo-list.module').then(
        (m) => m.TODOListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
