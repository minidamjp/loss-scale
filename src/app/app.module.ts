import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AddRecordComponent } from './add-record/add-record.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPageComponent } from './top-page/top-page.component';
import { WeightGraphComponent } from './weight-graph/weight-graph.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    WeightGraphComponent,
    AddRecordComponent,
  ],
  imports: [
    BrowserModule,
    PlotlyModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
