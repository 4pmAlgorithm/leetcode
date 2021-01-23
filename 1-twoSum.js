/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
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



var twoSum = function(nums, target) {
    //object for storing value and their index
    const obj = {};
    const len = nums.length;
    for( let i=0; i< len; i++ ){
        //if target - current value in array exist in obj then that's what we need
           console.log(obj)
        if( target - nums[i] in obj ){
               console.log(obj)
            return [ obj[ target - nums[i] ], i ];
        }
        //if target - current value doesn't exist in obj then push the value in obj
        obj[ nums[i] ] = i;
        console.log(obj)
    }
    console.log(obj)
};

function twoSum(array, target){
    let obj = {}

    for(let i = 0; i < array.length; i++){
        obj[array[i]] = i
    }

    for(let i = 0; i < array.length; i++){
        let targetValue = target - array[i];
        if(obj[targetValue]){
            return [ i, values[targetValue]]
        }
    }
}