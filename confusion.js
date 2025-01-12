// const A=321;
// A=432;
// console.log(A);// throws an error

//const A=[1,2,3,4];
//A[2]=4;
//console.log(A);

const A={
    "name":"gaurav",
    roll:123,
    desig:"raj",
    11:"ram"
}
//Object.freeze(A);
//A["name"]="ram";
//console.log(A);

const B={
    "name1":"gaurav",
    roll1:123,
    desig1:"raj",
    111:"ram"
}
const D={...A,...B};
console.log(D);
const C= Object.assign({},A,B);
console.log(C);




