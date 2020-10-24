import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parrent1Component } from './parrent1/parrent1.component';
import { Parrent2Component } from './parrent2/parrent2.component';
import { Child1Component } from './parent1/child1/child1.component';
import { Child2Component } from './parent1/child2/child2.component';
import { Child3Component } from './parent2/child3/child3.component';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';

@NgModule({
  declarations: [
    AppComponent,
    Parrent1Component,
    Parrent2Component,
    Child1Component,
    Child2Component,
    Child3Component,
    Parent1Component,
    Parent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
