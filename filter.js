const A=[11,22,33,0,44,55,66,77,88,99,110];
 const B=A.map((i)=>{
   // return i;
    return i<66;
})
console.log(B);
console.log(A);