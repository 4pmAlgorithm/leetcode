// https://leetcode.com/problems/two-sum/

//4 March/09/2022 5:34PM - 5:41 couldn't solve it so looked at solution
//3
//2
//1


// [
// 3, //0
// 2, //1
// 3  //2
// ]

// 6

function twoSum (arr, target){
    let obj = {}
    if (arr.length === 2) return [0, 1];

    for(let i = 0; i < arr.length; i ++){
        obj[arr[i]] = i;
    }

    for(let i = 0; i < arr.length; i++) {
        let complement = target - arr[i]; 
        console.log(`${complement} = ${target} - ${arr[i]}`)
        let found = obj[complement]; // Determine whether the complement exist in the hashTable
        console.log("FOUND::::  ", found)
        console.log(obj)

        if(found !== undefined && found != i){
            console.log([i, found]) 
            return [i, found];
        }
	}
    console.log([0,0])
	return [0,0];
}

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


twoSum([3,2,3], 6)

