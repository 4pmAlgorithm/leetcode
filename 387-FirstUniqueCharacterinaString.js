//12/07/2020
//given a string, find the first non repeating character and return the index

function first(str){

  let obj = {}
  
  for(let i = 0; i < str.length; i++){
    if(!obj.hasOwnProperty(str[i])) {
      obj[str[i]] = 1
    }else{
      obj[str[i]] = obj[str[i]] +1
    }
  }

  for(let i = 0; i < str.length; i++){
   
   if(obj[str[i]] ===1){
      return i
    }
  }
}

// time: O(n)
// space: O(1) //bc the alphabet contains only 26 letters.


//first("leetcode") //0
first("loveleetcode")//2





//11/14/2020 Sat w Vicky 
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