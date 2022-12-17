const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code
  let longString = ""
  let longInt=0

  for (const avenger of avengers) {
    //console.log(avenger)
    if (avenger.length>longInt){
        longInt=avenger.length
        longString=avenger
    }
    
  }
  return longString
}

console.log(findLongestWord(avengers))