import { Weather4Days } from './weather4Days';
import { List } from './list';
import { City } from './city';

export interface Iweather4Days{

    cod?:number;
    message?:number;
    cnt?:number;
    list: Array<List>;
    city: City;

    

}