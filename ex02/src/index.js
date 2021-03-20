function myCounter(n) {

    if(n < 1) {
return [];

    } else {
  const myRecursion = myCounter(n - 1); 
        myRecursion.unshift(n);
        return myRecursion;

}


}

console.log(myCounter((-1)));
console.log(myCounter((10)));
console.log(myCounter((5)));


module.exports = myCounter;
