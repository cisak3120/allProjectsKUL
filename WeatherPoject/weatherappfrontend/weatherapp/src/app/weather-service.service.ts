import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Iweather } from './iweather';
import { Observable } from 'rxjs';
import { Iweather4Days } from './iweather4Days';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  public getWeatherForCity(city: string) {
      return this.http.get<Iweather4Days>('http://localhost:8080/city/' + city );
      
  }
  public getWeatherFor4Days(city: string){
      return this.http.get<Iweather4Days>('http://localhost:8080/city/4days/' + city );
  }
}
