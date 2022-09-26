interface SStorage<T>{
    [key:string] : T
}

class LocalStorage<T>{
    private storage : SStorage<T> = {}
    set(key:string , value :T){
        this.storage[key] = value;
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string) : T {
        return this.storage[key]
    }
    clear(){
        this.storage = {} 
    }
}

const stringStorage = new LocalStorage<string>() 
stringStorage.get("ket")

const booleanStroage = new LocalStorage<boolean>();
booleanStroage.get("isAlert");