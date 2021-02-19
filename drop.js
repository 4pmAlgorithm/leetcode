function solution (wordList, keypads){
    let result = []
    let count = 0 
    for(let i = 0; i < keypads.length; i++){ //keypadspad outer loop  
      let newSet = new Set(keypads[i]) 
      console.log(newSet)
      let setHasChar = false 
      for(let j = 0; j < wordList.length; j++){//inner loop wordList loop 
          for(let k = 0; k < wordList[j].length; k++){ //each wordList char
            if(newSet.has(wordList[j][k])){
              console.log(wordList[j][k])
              setHasChar = true
            } else {
              setHasChar = false
              break;
            }
            if(wordList[j].includes(keypads[i][0]) && setHasChar && k === wordList[j].length-1 ){
              count += 1      
            }
          } 
      }//end of inner loop wordList loop
      result.push(count)
      count = 0    
    }//end of keypadspad outer loop
    return result
  }
  solution(['APPLE', 'PLEAS', 'PLEASE'], 
  ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY'] )
  // Expected output: [0, 1, 3, 2, 0]