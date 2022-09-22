const player: readonly [string,number,boolean] = ["nico",1,false]

type Player = {
    age? : number
}
const Dong : Player ={
    age : 12
}

//any는 타입스크립트 보호를 벗어난다.
const a : any[] = [1,2,3,4]
const b : any = true;

a+b