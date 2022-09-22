type SuperPrint = {
    (arr: number[]) : void
    (arr: boolean[]) : void
    (arr: string[]) : void
    (arr: (number|boolean)[]) : void
}

type SuperPrintGeneric = {
    <T>(arr: TexImageSource[]) : void
    (arr: boolean[]) : void
    (arr: string[]) : void
    (arr: (number|boolean)[]) : void
}

const superPrint : SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

const superPrintGeneric : SuperPrintGeneric = (arr) => {
    arr.forEach(i   => console.log(i))
}


 superPrint([1,2,3,4,5]);