import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
// Musimy zaimportować pakiet FormsModule aby uzywać dwukierunkowego wiązania - o tym będzie więcej w kolejnym wpisie
// Poniższy zapis w pliku: ng-switch.component.html ->  <select [(ngModel)]="selectedCar">
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Dodany pakiet
    FormsModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AppModule { }