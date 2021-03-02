package com.apiweather.utils;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.stereotype.Component;

@Component
public class JsonMapper {
    
    private ObjectMapper jsonMapper = new ObjectMapper();

    public String getJsonAsString(Object o) throws Exception{
        return jsonMapper.writeValueAsString(o);
    }


}