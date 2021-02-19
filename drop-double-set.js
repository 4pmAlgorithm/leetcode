function numKeypadSolutions(wordlist, keypads) {
  let result = [];
  let count = 0;
  
  let keyPadSet = {}
   for(let j = 0; j < keypads.length; j++){
       keypadSet = new Set(keypads[j])

   for(let i = 0; i < wordlist.length; i++){
   let wordSet = new Set(wordlist[i])
   
   let keyHasChar = false;
   for(const wordChar of wordSet){
       
       let lastChar = Array.from(wordSet).pop()

       if(keypadSet.has(wordChar)){
         keyHasChar = true;
       } else {
         keyHasChar = false;
         break;
       }
     
       if( lastChar === wordChar && keyHasChar  && wordlist[i].includes(keypads[j][0]) ){
           count += 1
       }
   }  
   }//end of wordlist
   result.push(count)
   count = 0  
   }
 return result
}

numKeypadSolutions(['APPLE', 'PLEAS', 'PLEASE'], 
['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY'] )


// numKeypadSolutions(['APPLE', 'PLEAS', 'PLEASE'], 
// ['AELWXYZ'] )

//'AELWXYZ', 
// Expected output: [0, 1, 3, 2, 0]