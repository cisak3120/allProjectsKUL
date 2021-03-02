package com.apiweather;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController 
public class RestApi {
    
    @Autowired
    WeatherService weatherService;

    @GetMapping("/city/{city}")
    public String getWeatherInfoForCity(@PathVariable String city) throws Exception {
        return weatherService.getWeatherForCity(city);
    }

    @GetMapping("/city/4days/{city}")
    public String getWeatherInfoFor4Days(@PathVariable String city) throws Exception {
        return weatherService.getWeatherFor4Days(city);
    }


}