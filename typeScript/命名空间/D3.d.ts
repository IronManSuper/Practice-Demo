/**
 * Created by Administrator on 2017/2/10.
 */

declare namespace D3{
    export interface selectors{
        select:{
            (selector:string):Selection;
            (element:EventTarget):Selection;
        }
    }

    export interface Event{
        x:number;
        y:number;
    }

    export interface Base extends Selectors{
        event:Event;
    }
}

declare let d3:D3.Base;