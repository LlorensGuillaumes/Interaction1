const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {

    let suma = 0
    for (const parametro of param) {

        //console.log(typeof parametro)

        if (typeof parametro === 'number'){
            suma = suma + parametro
        }else if (typeof parametro === 'string'){
            suma = suma + parametro.length
        }else{
            console.log ('Parameter ERR - El array debe contener numeros o cadenas de texto')
        }
        
    }
    return suma
  // insert code
}

console.log(averageWord(mixedElements))