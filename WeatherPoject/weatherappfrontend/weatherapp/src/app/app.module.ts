import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WeatherServiceService } from './weather-service.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherTodayComponent } from './weather-today.component';
import { WeatherNextComponent } from './weather-next.component';



@NgModule({
  declarations: [
    AppComponent,
    WeatherTodayComponent,
    WeatherNextComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
