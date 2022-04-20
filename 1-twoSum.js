// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//11 4/13/2022 teaching material
//10 4/13/2022 1:12pm - 1:14pm
//9 4/12/2022 10:45-10:46am 1min
//8 4/11/2022 1:44pm - 1:47pm
//6 4/11/2022 1:21pm - 1:36pm
//5 03/28/2022 4:55pm - 5:15 gave up and looked at answer
//4 March/09/2022 5:34PM - 5:41 couldn't solve it so looked at solution
//3
//2
//1



//11

function twoSum (nums, target){
    let obj = {}   //create an empty object to store key/val pairs
   
   for(let i=0; i < nums.length; i++){ //iterate the nums array
       obj[nums[i]] = i  //store key as num : value as index in the obj
   }
   
   for(let i=0; i<nums.length; i++){  //iterate the nums array again
       let diff = target - nums[i]  //store the difference from the target minus num
       
       if(obj[diff]===i)continue; 
       if(obj.hasOwnProperty(diff)){   //if the obj has diff number as a key, then we found the answer
           return [obj[diff], i]  //so return the value of the object keys, diff and current i
       }
   }
   
   console.log(obj)
   return []
}
But the above solution is slow because it's iterating twice using the same for loop. We can use the same for loop to get our answer faster.

//FASTER SOLUTION
function twoSum (nums, target){
    let obj = {}   //create an empty object to store key/val pairs
   
   for(let i=0; i<nums.length; i++){  //iterate the nums array 
       let diff = target - nums[i]  //store the difference from the target minus num
       
       if(obj.hasOwnProperty(diff)){   //if the obj has diff number as a key, then we found the answer
           return [obj[diff], i]  //so return the value of the object keys, diff and current i
       }
        obj[nums[i]] = i  //<------- store key as num : value as index in the obj  
   }
   return []
}


//9 4/12/2022 10:45-10:46am 1min
function twoSum (nums, target){
    
    let obj = {}
    
    for(let i=0; i <nums.length; i++){
    
        let sub = target-nums[i]
        if(obj.hasOwnProperty(sub)){
            return [obj[sub], i]
        }
        obj[nums[i]] = i;
    }
    return []
}


//8 4/11/2022 1:44pm - 1:47pm

function twoSum (nums, target){
    
    let obj = {}; //create an empty object to store key/val pairs
    
    for(let i=0; i<nums.length; i++){ //iterate the nums array
        
        let num = nums[i] //store each number in num variable
        
        let sub = target-num //store subtract, target minus num
        
        if(obj.hasOwnProperty(sub)){ //before storing key=num/value=index in the obj, if it already exist, then return it
            return [obj[sub], i]
        }

        obj[num] = i //key=num/value=index in the obj
    }
    return [] //return empty array if nothing exists
}



//7 4/11/2022 1:36 - 1:44pm
function twoSum (nums, target){
    let obj = {}

    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        let sub = target-num
        if(obj.hasOwnProperty(sub)){
            return [obj[sub], i];
        }
        obj[num] = i
    }
    return []
}



//6 4/11/2022 1:21pm - 1:36pm but this solution is slow
var twoSum = function(nums, target) {
  
    let obj = {};

    for(let i=0; i < nums.length; i++){
        obj[nums[i]] = i;    
    }
    console.log(obj)
    
    for(let i=0; i< nums.length; i++){
        let sub = target-nums[i]
        console.log(sub)
        
        if( i === obj[sub]) continue;
       
        if(obj.hasOwnProperty(sub)){
            console.log([i, obj[sub]])
            return [i, obj[sub]]
        }
    }
}




function twoSum(arr, target){
    //1. obj { ele: index }
    //2. for loop
    //3. sub = target - ele 
    //4. if sub exist in the obj as a key, then return index of that sub, and return ele index

    let obj = {}

    for(let i = 0; i < arr.length; i++){
        obj[arr[i]] = i;
    }

    for(let i =0; i <arr.length; i++){
        let sub = target - arr[i];

        if( obj[sub] !== undefined && obj[sub] !== i  ){
            console.log([i, obj[sub]])
            return [i, obj[sub]]
        }
    }
}

twoSum([3,2,4], 6)
// [
// 3, 6-3=3
// 2, 6-2=4
// 4  6-4=2
// ], 
// 6


// [
// 3, //0
// 2, //1
// 3  //2
// ]

// 6

// function twoSum (arr, target){
//     let obj = {}
//     if (arr.length === 2) return [0, 1];

//     for(let i = 0; i < arr.length; i ++){
//         obj[arr[i]] = i;
//     }

//     for(let i = 0; i < arr.length; i++) {
//         let complement = target - arr[i]; 
//         console.log(`${complement} = ${target} - ${arr[i]}`)
//         let found = obj[complement]; // Determine whether the complement exist in the hashTable
//         console.log("FOUND::::  ", found)
//         console.log(obj)

//         if(found !== undefined && found != i){
//             console.log([i, found]) 
//             return [i, found];
//         }
// 	}
//     console.log([0,0])
// 	return [0,0];
// }

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             if ((nums[i] + nums[j]) === target){
//                 return [i, j]
//             }
//         } 
//     }
//     return undefined 
// }



// var twoSum = function(nums, target) {
//     //object for storing value and their index
//     const obj = {};
//     const len = nums.length;
//     for( let i=0; i< len; i++ ){
//         //if target - current value in array exist in obj then that's what we need
//            console.log(obj)
//         if( target - nums[i] in obj ){
//                console.log(obj)
//             return [ obj[ target - nums[i] ], i ];
//         }
//         //if target - current value doesn't exist in obj then push the value in obj
//         obj[ nums[i] ] = i;
//         console.log(obj)
//     }
//     console.log(obj)
// };

// function twoSum(array, target){
//     let obj = {}

//     for(let i = 0; i < array.length; i++){
//         obj[array[i]] = i
//     }

//     for(let i = 0; i < array.length; i++){
//         let targetValue = target - array[i];
//         if(obj[targetValue]){
//             return [ i, values[targetValue]]
//         }
//     }
// }


//twoSum([3,2,3], 6)

