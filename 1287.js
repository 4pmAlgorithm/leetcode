//with aleksa Jan 12th 2021

var findSpecialInteger = function(arr) {

    let obj = {}
    let oneFourth = arr.length/4

    for( num of arr){
        
          if(!obj.hasOwnProperty(num)){
              obj[num] = 1
          } else{
              obj[num] = obj[num] +1        
        }
    }
    
    for(let key in obj){
        if(obj[key] > oneFourth){
            return key
        }
    }
    console.log(obj)
};