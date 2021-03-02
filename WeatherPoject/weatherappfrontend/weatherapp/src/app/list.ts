import { Main } from './main';
import { Weather } from './weather';
import { Clouds } from './clouds';
import { Wind } from './wind';
import { Sys } from './sys';
import { Rain } from './rain';

export interface List{
    dt?:number;
    main?:Main;
    weather?:Array<Weather>;
    clouds?: Clouds;
    wind?:Wind;
    rain?:Rain;
    sys?:Sys;
    dt_txt?:string;
    

} 