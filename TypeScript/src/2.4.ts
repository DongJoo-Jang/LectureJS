let t1 : unknown

if(typeof t1 ==='number'){
    let b = t1 +1;
}

function hello() : never{
    return "X"
}

function hello2() : never{
    throw new Error("xxx")
}

function hello3(name :string|number) : never{
    if(typeof name === "string"){

    }
    else if(typeof name === "number"){
        name+1
    }else{
        name
    }
}