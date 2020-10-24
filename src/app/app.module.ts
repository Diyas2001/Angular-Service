import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './parent1/child1/child1.component';
import { Child2Component } from './parent1/child2/child2.component';
import { Child3Component } from './parent2/child3/child3.component';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import {SharedService} from './Services/SharedService';
import {LoggingService} from './Services/LoggingService';

@NgModule({
  declarations: [
    AppComponent,
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
  providers: [SharedService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
