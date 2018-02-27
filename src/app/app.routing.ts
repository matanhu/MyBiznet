import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { TestComponent } from './test/test.component';
import { StatusPageComponent } from './pages/status-page/status-page.component';

const appRoutes: Routes = [
  // { path: '', component: TodosComponent },
  { path: '', component: TestComponent },
  { path: 'status', component: StatusPageComponent },
  { path: 'b', component: TestComponent },
  { path: 'c', component: TestComponent },
  { path: 'd', component: TestComponent },
  { path: 'e', component: TestComponent },
  { path: 'todo/:id', component: TodoComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
