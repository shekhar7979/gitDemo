import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from "@angular/common/http"
import { ChartModule } from 'primeng/chart';


import { AppComponent } from './app.component';
import { ServiceTaskComponent } from './service-task/service-task.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Crud1Component } from './crud1/crud1.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiComponent } from './directi/directi.component';
import { TempletDrivenComponent } from './templet-driven/templet-driven.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustpipePipe } from './custpipe.pipe';
import { PracticeserviceComponent } from './practiceservice/practiceservice.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PromiseComponent } from './promise/promise.component';
@NgModule({
  declarations: [
    AppComponent,
    ServiceTaskComponent,
    Crud1Component,
    DataBindingComponent,
    DirectiComponent,
    TempletDrivenComponent,
    PipeComponent,
    CustpipePipe,
    PracticeserviceComponent,
    RxjsComponent,
    PromiseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
