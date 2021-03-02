import { Coord } from './coord';

export interface City{
    id?:number;
    name?:string;
    coord?:Coord;
    country?:string;
    population?:string;
    timezone?:number;
    sunrise?:number;
    sunset?:number;

}