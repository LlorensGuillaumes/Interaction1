const numbers = [1, 2, 3, 5, 45, 37, 58];

let suma = 0
function sumAll(param) {
  for (const number of numbers) {
    suma=suma+number
  }
  return suma
}

console.log(sumAll(numbers))