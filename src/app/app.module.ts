import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodosService } from './todos/todos.service';

import { routing, appRoutingProviders } from './app.routing';
import { TestComponent } from './test/test.component';
import { KeyPipe } from './pipes/key.pipe';
import { BzselectComponent } from './bzselect/bzselect.component';
import { CircleComponent } from './circle/circle.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { StatusPageComponent } from './pages/status-page/status-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    TestComponent,
    KeyPipe,
    BzselectComponent,
    CircleComponent,
    MenuButtonComponent,
    StatusPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
