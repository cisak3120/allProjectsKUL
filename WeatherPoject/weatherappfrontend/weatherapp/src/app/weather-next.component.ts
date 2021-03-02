import { Component, OnInit, Input } from '@angular/core';
import { Iweather } from './iweather';
import { Iweather4Days } from './iweather4Days';
import { stringify } from 'querystring';
import { List } from './list';

@Component({
  selector: 'app-weather-next',
  template: `
  <div  class="weather-main-info">
    <div class="date-info">{{date}}</div>
    <div class="temperature-info">{{temperature + '°' + "C"}}</div>
  </div>
  <div class="weather-info"> 
      <ul class="details">
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
    </ul>
    </div>
  `,
  styles: [
    `
    :host(){
        flex: 1;
        display: flex;
        background: url(https://www.fototapety24.net/fotografia/700/85319155/blekitne-niebo-natura-niebo-element.jpg) no-repeat;
        background-attachment: fixed;
        background-position: center;
        flex-basis: 100%;
        background-size: cover;
        margin: 0px;
        justify-content: flex-end;
        margin: 2px;
        border-radius: 4px;
    }
    .weather-info {
      background-color: rgba(255,255,255, 0.7);
      width: 40%;
      height: 97%;
      margin: 3px;
      justify-content: flex-end;
      font-size: 15px;
      color: darkslategray;
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

    .details{
      display:flex;
      overflow: auto;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      height: inherit;

    }

    .date-info{
      color: white;
      font-size: 40px;
      display: flex;
      flex-shrink: 1;
      flex-basis: 100%;
      flex:1;
      text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
      justify-content: center;
    }
    .temperature-info{
      color: white;
      font-size: 40px;
      display: flex;
      flex-shrink: 1;
      flex-basis: 100%;
      flex:1;
      text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
      justify-content: center;
    }
    `
  ]
})
export class WeatherNextComponent implements OnInit {

  public temperature: number;
  public iweather:List;
  public city: string;
  public clouds:string;
  public feelLike:number;
  public wind:number;
  public humidity:number;
  public pressure: number;
  public photo: string;
  public photos:Array<string>;
  public date:string;
  // public arrayIndeks:Array<number>;


  constructor() { 
    this.feelLike=0;
    this.temperature=0;
  }

  // public getData(){
  //   let array:(number)[];
  //   let el="15"
  //   let index=0;
  //   for(let i=0; i<this.iweather.list.length ; i++){
  //     if(this.iweather.list[i].dt_txt.substring(12,13)==el){
  //      array[index]=i;
  //     index++;
  //     }
  //   }
  //   return array;
  // }

  @Input('weather')
  set setWeather(iweather: List){
    if(iweather){
      this.iweather=iweather;
      // this.arrayIndeks=this.getData();
      //this.getData();
      this.temperature=this.tempToC( this.iweather.main.temp);
      this.feelLike=this.tempToC(this.iweather.main.feels_like);
      this.clouds=this.iweather.weather[0].description;
      this.wind= this.iweather.wind.speed;
      this.humidity= this.iweather.main.humidity;
      this.pressure= this.iweather.main.pressure;
      this.date=this.iweather.dt_txt.split(" ")[0];
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
