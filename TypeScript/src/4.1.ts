type Words = {
    [key:string] : string
}


class Dict{
    private words :Words
    constructor(){
        this.words = {}
    }

    add(word:Word){
        if(this.words[word.term] === undefined){
            this.words[this.words.term] = word.def;
        }
    }
    update(word:Word){
        if(this.words[word.term] !== undefined){
            this.words[this.words.term] = word.def;
        }
    }

    get(term:string){
        return this.words[term];
    }
    delete(term:string){
        delete this.words["term"];
    }
    showAll(){
        return this.words
    }


}

 class Word{
    constructor (
        public term : string,
        public def : string
    ){}
 }

 const kimchi = new Word("kimchi", "한국의 음식");

 const dict = new Dict()

 dict.add(kimchi);
 dict.delete("kimchi");
 console.log(dict.get("kimchi"));