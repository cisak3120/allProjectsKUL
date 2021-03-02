import { Coord } from './coord';
import { Weather } from './weather';
import { Main } from './main';
import { Wind } from './wind';
import { Clouds } from './clouds';
import { Sys } from './sys';

export interface Iweather {
  //  {"coord":{"lon":23,"lat":51},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":304.15,"feels_like":304.02,"temp_min":304.15,"temp_max":304.15,"pressure":1008,"humidity":48},"visibility":10000,"wind":{"speed":4.6,"deg":90},"clouds":{"all":20},"dt":1591972922,"sys":{"type":1,"id":1702,"country":"PL","sunrise":1591928011,"sunset":1591987349},"timezone":7200,"id":858785,"name":"Lublin Voivodeship","cod":200}
    coord?: Coord; 
    weather?: Array<Weather>;
    base?: string;
    main?: Main;
    visibility?: number;
    wind?: Wind;
    clouds?: Clouds;
    dt?: number;
    sys?: Sys;
    timezone?: number;
    id?: number;
    name?: string;
    cod?:number;

}
