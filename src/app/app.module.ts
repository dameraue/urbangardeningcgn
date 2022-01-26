import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewMapComponent } from './overview-map/overview-map.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { ChartProjectGrowthComponent } from './chart-project-growth/chart-project-growth.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    OverviewMapComponent,
    NavigationComponent,
    ProfileComponent,
    AboutComponent,
    PageNotFoundComponent,
    ChartProjectGrowthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
