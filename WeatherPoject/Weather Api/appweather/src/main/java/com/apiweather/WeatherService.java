package com.apiweather;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

import com.apiweather.utils.JsonMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WeatherService {

    @Autowired
    JsonMapper jsonMapper;
    //5 dni "http://api.openweathermap.org/data/2.5/forecast?q=%s&lang=pl&appid=%s";
    //1 dzien "http://api.openweathermap.org/data/2.5/weather?q=Lublin&lang=pl&appid=cab5ea97ba14773e094a4302657d22de";
    // private final static String WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?q=%s&lang=pl&appid=%s";
    //"http://api.openweathermap.org/data/2.5/weather?q=%s&lang=pl&appid=%s";
    private final static String WEATHER_KEY = "cab5ea97ba14773e094a4302657d22de";
    private final static String WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?q=%s&lang=pl&appid=%s";
    private final static String WEATHERFOR4_URL = "http://api.openweathermap.org/data/2.5/forecast?q=%s&lang=pl&appid=%s";

    public String getWeatherForCity(String city) {
       return getWeather(WEATHER_URL, city);
    }

    public String getWeatherFor4Days(String city){
        return getWeather(WEATHERFOR4_URL, city); 
    }

    private String getWeather(String url, String city){
        StringBuilder content = new StringBuilder();

        try
        {  
            URL weatherURL = new URL(String.format(url, city, WEATHER_KEY));
            URLConnection urlConnection = weatherURL.openConnection();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
            String line;

            while ((line = bufferedReader.readLine()) != null)
            {
                content.append(line + "\n");
            }

            bufferedReader.close();
            
        }
        catch(Exception e)
        {
          e.printStackTrace();
        }
       
       return content.toString();
    }



}