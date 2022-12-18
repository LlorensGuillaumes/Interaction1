const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(params) {
  // insert code
  let copyOfparams = [...params]
  let result={}

  removeDuplicates(params) //obtengo array sin duplicados
      //Aqui tengo params -- sin duplicados --
      //y copyOfParams -- con duplicados --

      let contador=0
      for (const param of params) {

        for (const param2 of copyOfparams) {  

          if (param2 === param){
            contador ++
          }
        }
        result[param] = contador
        contador=0     
      }
    return(result)
  }
  

  console.log(repeatCounter(counterWords))



//Creo función para obtener un array sin duplicados
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


