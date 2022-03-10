//numJewelsInStones("aA", "aAAbbbb")
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

//#2 3/10/2022 3:54pm - 4:02pm (8min)
//#1 3/9/2022 6:00 - 6:19pm (19min)



//#2 3/10/2022 3:54pm - 4:02pm (8min)
function numJewelsInStones(jewel, mystone){
 let obj = {}
 for(let i =0; i < jewel.length; i++){
  if(!obj[jewel[i]]){
   obj[jewel[i]] = 1
  }else{ 
   obj[jewel[i]]++
  }
 }
 let count = 0;
 for(let i=0; i < mystone.length; i++){
  for(let keys in obj){
   if(keys === mystone[i]){
    count++
   }
  }
 }
 return count
}

// function numJewelsInStones(jewels, stones){
//  let obj = {}
//  for(let i = 0; i < jewels.length; i++){
//   obj[jewels[i]] = i
//  }
//  let count = 0;
//  for(let j = 0; j < stones.length; j++){
//   for(let keys in obj){
//    console.log(`${stones[j]} === ${keys}`)
//    if(stones[j] === keys){
//     count++
//    }
//   } 
//  }
//  console.log(obj)
//  console.log(count)
// }

numJewelsInStones("aA", "aAAbbbb")
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3