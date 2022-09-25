import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPageComponent } from './top-page/top-page.component';
import { WeightGraphComponent } from './weight-graph/weight-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    WeightGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
