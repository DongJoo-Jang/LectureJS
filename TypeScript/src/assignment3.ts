type SStorage<T> ={
    [key:string] : T
}

abstract class acLocalStorage<T>{
    protected storage : SStorage<T> = {}
    
    abstract setItem(key:string , value :T) : void
    abstract getItem(key:string) : T
    abstract clearItem(key: string) : void
    abstract clear() : void

    
}

class LocalStorage<T> extends acLocalStorage<T>{

    setItem(key:string , value :T){
        this.storage[key] = value;
    }
    
    getItem(key:string) : T {
        return this.storage[key]
    }
    clearItem(key:string){
        delete this.storage[key]
    }
    clear(){
        this.storage = {} 
    }
}

type getCurrentPositionType ={
    (successFn:string) : void
    (successFn:string,errorFn:string) : void
    (successFn:string,errorFn:string,optionObj:string) : void
}

type watchPosition ={
    (success:string) : void
    (success:string,error:string) : void
    (success:string,error:string,options:string) : void
}

class geolocation{
    protected getCurrentPosition : getCurrentPositionType =(sucessfn,errorfn?,optionoObj?) =>{
        if(optionoObj){}
        else if (errorfn){}
        else {}
    }
    protected watchPosition : watchPosition = (success,error?,options?) => {
        if(options){}
        else if (error){}
        else {}
    }
    protected clearWatch = (id :string) => {}
    }
   