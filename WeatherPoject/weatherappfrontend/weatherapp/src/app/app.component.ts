import { Component, SimpleChanges } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';
import { Iweather } from './iweather';
import { Iweather4Days } from './iweather4Days';
import { List } from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public city: string;
  public weather: Iweather4Days;
  public photo: string;
  public cityOutput: string;
  public dates:Array<List>;
  public today:Iweather;
  public photos:Array<string>;
  

  constructor(private weatherService:WeatherServiceService){
    this.city='Lublin';
    this.photo="assets/images/bezchmurne.jpg";
    this.getWeatherForCity();
    this.dates=[];
    
  }

  public getWeatherForCity(){
        this.getWeatherFor4Days();
        this.weatherService.getWeatherForCity(this.city).subscribe((data) => {
        this.today=data;
        
        // let dateFirstDay= new Date(this.dates[0].dt_txt);
        // if(dateFirstDay.getDate()===dateToday.getDate()){
        //   this.dates.splice(0,1);
        // }
        // else {
        //   this.dates.splice(3,1);
        // }  
        // console.log(this.dates);
        
      })   
  }

  public getData(weathers:Array<List>){
    let dateToday=new Date();
    this.dates=[];
    for(let i=0; i<weathers.length; i++){

      if(this.dates.length < 3 ){
        console.log(this.dates.length);
        let date:Date=new Date(weathers[i].dt_txt);
        if(date.getHours() === 15 && dateToday.getDate() != date.getDate()){
          this.dates.push(weathers[i]);
        } 
      }else break; 
    }
    console.log(this.dates);
  }



  public getWeatherFor4Days(){
    this.weatherService.getWeatherFor4Days(this.city).subscribe((data) => {
         this.weather=data;
        console.log(this.weather);
        this.matchPhoto();
        this.cityOutput=this.city;
        let date:Date=new Date(this.weather.list[5].dt_txt);
        console.log(date.getHours());
        date.getHours();

        this.getData(this.weather.list);
        this.photos=[];
        for(let i=0; i<this.dates.length; i++ ){
          this.photos[i]= this.matchPhoto2(this.dates[i].weather[0].main)
          console.log(this.dates[i].weather[0].main);
         }
         console.log(this.photos);
        
      
    })
  }
  
  public matchPhoto( ){
    switch(this.weather.list[0].weather[0].main){
      case "Rain"   : 
        this.photo="assets/images/deszcz.jpg";
        break;    
      case "Clouds" : 
        this.photo="assets/images/zachmurzenie.jpg";
        break;
      case "Clear"  : 
        this.photo="assets/images/bezchmurne.jpg";
        break;
      case "Snow"   : 
        this.photo="assets/images/deszcz.jpg";
        break;
      
    } 
  }

  public matchPhoto2( weatherKind:string ){
    
    switch(weatherKind){
      case "Rain"   : 
        return  "assets/images/deszcz.jpg";    
      case "Clouds" : 
        return "assets/images/zachmurzenie.jpg";
        
      case "Clear"  : 
      return "assets/images/bezchmurne.jpg";
        
      case "Snow"   : 
      return "assets/images/deszcz.jpg";
        
      
    } 
  }

  

  // ngOnChanges(changes: SimpleChanges) {
  //   this.matchPhoto();
  //   this.weather;
  // }

}
