const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code
  let suma=0
  for (const number of param) {
    suma=suma+number
  }
  //console.log(contador)
  return (suma/param.length)
}

console.log(average(numbers))