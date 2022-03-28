// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

//#3 2022/03/15 1:12pm - 
//#2 2022/03/10 #1365 howmany 5:15pm- 5:24pm
//#1 2022/03/10 #1365 howmany 4:15pm- 5:15pm


// 1. sort the arr 
// 2. store the sorted num in obj w index num as val
// 3. skip the same num 
// 4. return the index num for each ele of the original arr 



function smallerNumbersThanCurrent(nums){
    let sorted = [...nums].sort((a,b) => a-b)

    let hash = {}, result = []

    for(let i = 0; i < sorted.length; i++){
        if(sorted[i] === sorted[i-1]) continue;
        hash[sorted[i]] = i
    }

    //console.log(hash)

    for(let i = 0; i < nums.length; i++){
        result.push(hash[nums[i]])     
    }
    console.log(result)
    return result
}



smallerNumbersThanCurrent([8,1,2,2,3])


//#2 2022/03/10 #1365 howmany 5:15pm- 5:24pm
// var smallerNumbersThanCurrent = function(nums) {
   
//  let sorted = [...nums].sort((a,b) => a-b)
//  let hash = {}, result = [];
  
//   for(let i = 0; i < sorted.length; i++){
//       if(sorted[i] === sorted[i-1]) continue;
//       hash[sorted[i]] = i
//   }
  
//   nums.forEach((each, i) => {
//       result[i] = hash[each]
//   })
  
//  //  console.log(result)
//  // console.log(hash)
//   return result
// };




//#1 2022/03/10 #1365 howmany 4:15pm- 5:15pm

// function smallerNumbersThanCurrent(nums){
//  let sorted = [...nums].sort((a,b) => a-b) //concat the nums in an arr

//  let hash = {}, result = [];

//  for(let i = 0; i < sorted.length; i++){
//   console.log(sorted[i], sorted[i-1])
//   if(sorted[i] === sorted[i-1]) continue; //if the ele are same, then skip
//   hash[sorted[i]] = i
//  }



//  for(let i = 0; i < nums.length; i++){
//   result[i] = hash[nums[i]]
//  }
//  console.log(nums)
//  console.log(result)
//  console.log(hash)
// }



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

// smallerNumbersThanCurrent([8,1,2,2,3])

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