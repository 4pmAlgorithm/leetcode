//#2 2022/03/10 #1365 howmany 5:15pm- 5:24pm
//#1 2022/03/10 #1365 howmany 4:15pm- 5:15pm


//#2 2022/03/10 #1365 howmany 5:15pm- 5:24pm
var smallerNumbersThanCurrent = function(nums) {
   
 let sorted = [...nums].sort((a,b) => a-b)
 let hash = {}, result = [];
  
  for(let i = 0; i < sorted.length; i++){
      if(sorted[i] === sorted[i-1]) continue;
      hash[sorted[i]] = i
  }
  
  nums.forEach((each, i) => {
      result[i] = hash[each]
  })
  
 //  console.log(result)
 // console.log(hash)
  return result
};




//#1 2022/03/10 #1365 howmany 4:15pm- 5:15pm

function smallerNumbersThanCurrent(nums){
 let sorted = [...nums].sort((a,b) => a-b) //concat the nums in an arr

 let hash = {}, result = [];

 for(let i = 0; i < sorted.length; i++){
  console.log(sorted[i], sorted[i-1])
  if(sorted[i] === sorted[i-1]) continue; //if the ele are same, then skip
  hash[sorted[i]] = i
 }



 for(let i = 0; i < nums.length; i++){
  result[i] = hash[nums[i]]
 }
 console.log(nums)
 console.log(result)
 console.log(hash)
}



// var smallerNumbersThanCurrent = function(nums) {
//  let sortedArr = nums.sort((a,b) => a)

//  let hash = {};
//  let result = [];

//  nums.forEach((each, i) => {
//   hash[each] = i;
//  })

//   for(let i = 0 ; i < nums.length; i++){
//    let count = 0;
//       for(keys in hash){
//        console.log(nums[i], keys)
//        if(nums[i] >= keys){
//         console.log("++")
//         count++
//        }
//       }  
//       result.push(count)
//  }

//  console.log(result)
//  return result
// };

//solution
// var smallerNumbersThanCurrent = function(nums) {
// let sortedArr = [...nums].sort((a,b)=> a-b) 
    
// let hash = {}, res = []

// for(let i = 0; i < sortedArr.length; i++){
//  if(sortedArr[i] == sortedArr[i-1]) continue;
//     hash[sortedArr[i]] = i //the index equals the number of smaller digits in the arr
// }
// for(let i = 0; i < nums.length; i++){
//     res[i] = hash[nums[i]]
// }
// console.log(hash)
// console.log(res)
// return res
// }

smallerNumbersThanCurrent([8,1,2,2,3])

//#1 not passing, time out  
// var smallerNumbersThanCurrent = function(nums) {
   
//  let result = [];
 
//  for(let i = 0 ; i < nums.length; i++){
//       let count = 0;
    
//      for(let j = nums.length-1; j >=0 ; j--){
//           console.log(nums[j], nums[i])  
//          if(nums[i] > nums[j]){
//              count++                 
//          }
//      }
//      result.push(count)
//  }
//  //console.log(result)
//  return result
// };