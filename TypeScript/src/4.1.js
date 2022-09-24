class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    update(word){
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
    }
    get(term) {
        return this.words[term];
    }
    delete(term) {
        delete this.words[term];
    }



    showAll(){
        return this.words
    }

}
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
const kimchi = new Word("kimchi", "한국의 음식");
const ramen = new Word("ramen", "일본의 면요리");
const chiken = new Word("chiken", "닭 튀김");

const dict = new Dict();
dict.add(kimchi);
dict.add(ramen);
dict.add(chiken);
dict.delete("kimchi");
console.log(dict.showAll());