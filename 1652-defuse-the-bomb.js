var decrypt = function(code, k) {
    
    let result = new Array(code.length).fill(0)
    
   for(let i = 0; i < code.length; i++){ //i = 1 //7
       
       if(k > 0){
           
           let index = i + 1; //2 //3 //4 //1
           //console.log(index)
           let counter = 0;  //1 //2 //3
           
           while(k > counter){ //
               if(index === code.length) index = 0; //to reset the index number
               //console.log(index, code.length)
                result[i] += code[index] //result[i] === 1 + 4 + 5
               //console.log("result", result)
                 index++;
                 counter++;
          }//9
       }
       
       if(k < 0){
           let index = i-1;
           
           let counter = 0;
           while(k < counter){
               if(index === -1) index = code.length-1; //
               result[i] += code[index]
               index--;
               counter--;
           }
       }
      
   }
    return result
};