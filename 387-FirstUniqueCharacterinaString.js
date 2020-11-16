//https://leetcode.com/problems/first-unique-character-in-a-string/

// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.


function findNonRepeat(str){

    let obj ={}
  
    for(let i = 0; i <str.length; i++){
        if(!obj[str[i]]){
          obj[str[i]] = 1
        } else{
          obj[str[i]] = obj[str[i]] +1
        }
     }
  
        for(let key in obj){
         return obj[key] === 1 ? str.indexOf(key): -1 //ternary
        }
        //   if(obj[key] === 1){
        //     return str.indexOf(key)
        //   }
        // }
        // return -1
        }
        //O(n) time
        //O(n) space
  
  //findNonRepeat("leetcode") //0
  //findNonRepeat("loveleetcode")//2
  //findNonRepeat("love") //0
  findNonRepeat("ll") //-1