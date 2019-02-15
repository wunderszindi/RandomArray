let arrayTwoD = (a, b) => {
  let arr = [];
  for (let i = 0; i < a; i++) {
    let arr2 = [];
    for (let j = 0; j < b; j++) {
      arr2.push(0);

    } 
    arr.push(arr2);
  }
  return arr;
};

arrayTwoD(5, 6);


module.exports = { arrayTwoD };
