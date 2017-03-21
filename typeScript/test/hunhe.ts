/**
 * Created by Administrator on 2017/2/13.
 */

class Disposable{
    isDisposed:boolean;
    dispose(){
        this.isDiposed=true;
    }
}

class Activatable{
    isActive:boolean;
    activate(){
        this.isActive=true;
    }

    deactivate(){
        this.isActive=false;
    }
}

class SmartObject implements Disposable,Activatable{
    constructor(){
        setInterval(()=>console.log(this.isActive+":"+this.isDisposed));
    }

    interact(){
        this.activate();
    }

    isDisposed:boolean=false;
    dispose:()=>void;

    isActive:boolean=false;
    activate:()=>void;
    dectivate:()=>void;
}

applyMixins(SmartObject,[Disposable,Activatable]);

let smartobj=new SmartObject();

setTimeout(()=>smartobj.interact(),1000);

function applyMixins(derivedCtor:any,baseCtors:any){
    baseCtors.forEach(baseCtors=>{
        console.log(baseCtors.prototype);
        Object.getOwnPropertyNames(baseCtors.prototype).forEach(name=>{
            derivedCtor.prototype[name]=baseCtors.prototype[name];
        })
    })
}