// recebe um número e soma todos os seus dígitos.
// se resultar em um dígito de 2 ou mais casas, continua fzd
// a soma de forma recursiva até que o resultado seja de
// apenas 1 dígito.

function recursive(n) {
    const splited = n.toString().split('')
    
    let result = splited.reduce((ant, atu) => {
      let antP = parseInt(ant)
      let atuP = parseInt(atu)
      antP+= atuP
      
      return antP
    })
  
    const resultP = result.toString()
    
    if(resultP.length === 1) {
      return resultP
    } else {
      return recursive(resultP)
    }
  }
  
  console.log(recursive(124453))