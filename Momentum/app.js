const calculator  = {
    plus : function (a,b){
        return a+b;
    },
    minus : function(a,b){
        return a-b;
    }
}

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(2,3);

console.log(plusResult);
console.log(minusResult);
