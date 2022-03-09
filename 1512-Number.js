//03/09/2022 5:55pm - 6:04pm


var numIdenticalPairs = function(nums) {
 let count = 0;
 for(let i = 0; i < nums.length; i++){
     for(let j = i+1; j < nums.length; j++){
         if(nums[i] === nums[j]){
             count++
         }
     }
 }
 return count
};