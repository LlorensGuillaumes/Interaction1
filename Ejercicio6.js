const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'ice-cream',
    'pizza',
    'pasta',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
  
    for(let i = 0; i<param.length; i++){
      
        if (param.indexOf(param[i])!==param.lastIndexOf(param[i])){
            
            param.splice([i],1)
            i--
        }
    }
    return param
    // insert code
  }
  //console.log(duplicates)
  console.log (removeDuplicates(duplicates))