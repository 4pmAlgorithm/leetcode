//3/9/2022 6:00 - 6:19pm


function numJewelsInStones(jewels, stones){
 let obj = {}
 for(let i = 0; i < jewels.length; i++){
  obj[jewels[i]] = i
 }
 let count = 0;
 for(let j = 0; j < stones.length; j++){
  for(let keys in obj){
   console.log(`${stones[j]} === ${keys}`)
   if(stones[j] === keys){
    count++
   }
  } 
 }
 console.log(obj)
 console.log(count)
}

numJewelsInStones("aA", "aAAbbbb")
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3