abstract class UserClass{
    constructor(
        private firstName: string,
        private lastName :string,
        private ninkName :string

    ){}

    abstract getNickName(): void

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class PlayerClass extends UserClass{
  

}

const nico = new PlayerClass("nico","las","니꼬");

nico.getFullName();