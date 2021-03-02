import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Iweather } from './iweather';
import { Iweather4Days } from './iweather4Days';

@Component({
  selector: 'app-weather-today',
  template: `
 
  <div *ngIf="iweather" class="weather-main-info">
    <div  class="city-info">{{city}}</div>
    <div  class="temperature-info">{{temperature + '°' + "C"}}</div>
  </div>
  <div *ngIf="iweather" class="weather-info"><h2 style ="text-align: center;">Dzisiaj</h2>
    <div class="details">
      <li >Zachmurzenie: 
      {{clouds}}</li>
      <li>Temperatura odczuwalna: 
      {{feelLike + '°' + "C" }}</li>
      <li>Prędkosć wiatru:
      {{wind + " m/s"}}</li>
      <li>Wilgotnosc powietrza:
      {{humidity+ '%'}}</li>
      <li>Ciśnienie:
      {{pressure + " hPa"}}</li>
    </div>
  </div>

  `,
  styles: [
    `:host(){
      <!-- background: url(https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366_1280.jpg) no-repeat ;-->
      background-attachment: fixed;
      background-position: center;
      flex-basis: 100%;
      background-size: cover;
      margin: 0px;
      flex-basis: 100%; 
      flex-shrink: 1;          
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .weather-main-info{
      display: flex;
      flex-basis: 100%;
      flex-shrink: 1;
      height: 100%;
      padding: 20px;
      box-sizing: border-box;
      flex-direction: column;
      align-items: center;
      
    }
    .city-info{
      color: white;
      font-size: 68px;
      display: flex;
      flex-shrink: 1;
      flex-basis: 100%;
      flex:1;
      text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    }
    .temperature-info{
      display: flex;
      flex-shrink: 0;
      flex-basis: auto;
      font-size: 68px;
      color: white;
      flex:2;
      text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    }
    .weather-info {
      background-color: rgba(255,255,255, 0.7);
      width: 40%;
      height: 97%;
      margin: 3px;
      justify-content: flex-end;
      font-size: 20px;
      color: darkslategray;
    }
      

    .details{
        display:flex;

        flex-direction: column;
        justify-content: flex-end;
        

      }
      .details-info{
        font-weight: bold;
      }
    `
  ]
})
export class WeatherTodayComponent implements OnInit {

  public temperature: number;
  public iweather:Iweather;
  public city: string;
  public clouds:string;
  public feelLike:number;
  public wind:number;
  public humidity:number;
  public pressure: number;
  public photo: string;


  constructor() { 
    this.feelLike=0;
    this.temperature=0;
  }

  @Input('weather')
  set setWeather(iweather: Iweather){
    if(iweather){
      this.iweather=iweather;
      this.temperature=this.tempToC( this.iweather.main.temp);
      this.feelLike=this.tempToC(this.iweather.main.feels_like);
      this.clouds=this.iweather.weather[0].description;
      this.wind= this.iweather.wind.speed;
      this.humidity= this.iweather.main.humidity;
      this.pressure= this.iweather.main.pressure;
    }
  }

  @Input('city')
  set setCity(city: string){
    this.city=city;
    
  }
  
  
  public tempToC( tempKalv: number){
   return  Math.floor(tempKalv-273);

  }

  public matchPhoto( ){
    switch(this.iweather.weather[0].main){
      case "Rain"   : 
        this.photo="../assets/images/deszcz.jpg";
        break;    
      case "Clouds" : 
        this.photo="../assets/images/zachmurzenie.jpg";
        break;
      case "Clear"  : 
        this.photo="../assets/images/Bezchmurne niebo.jpg";
        break;
      case "Snow"   : 
        this.photo="../assets/images/deszcz.jpg";
        break;
      // case "Thunderstorm" :
      //   this.photo="../assets/images/Burza.jpg";
      //   break; 
      
    } 
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.city;
  // }

  ngOnInit(): void {
  }
}
