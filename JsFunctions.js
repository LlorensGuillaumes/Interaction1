function sum(numberOne , numberTwo) {
  // insert code
  let comprovation = numberOne>numberTwo
  
  switch (comprovation){
    case false:
        return numberTwo
    case true:
        return numberOne
  }
}

console.log(sum(5,1))