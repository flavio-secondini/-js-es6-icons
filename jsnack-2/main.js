// primo metodo
var prova = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var test = myfunction(prova, 2, 5)

function myfunction(array, a, b) {
  test = array.slice(a, b + 1)
  return test
}

console.log(test);

// secondo metodo con ecmascript 6

const myFunction2 = (array, a, b) => {

  if (b < a) {
    let temp = b;
    b = a;
    a = temp;
  }
  const arrayFiltered = array.filter((element, index, array) => {
      return index >= a && index <= b
    });

  return arrayFiltered

};


console.log(myFunction2(prova, 2, 5));
