const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, value) {
    if (param.includes(value)){
        return param.indexOf(value)
    }else{
        return false
    }
    // insert code
  }

console.log(finderName(nameFinder, 'Hola'))