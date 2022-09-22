const last = (a) => a[a.length - 1];
const prepend = (arr, item) => {
    arr.push(item);
    return arr;
};
let testarr = [1, 2, 3];
let testitem = 10;
console.log(prepend(testarr, testitem));
