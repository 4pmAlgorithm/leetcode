//645. Set Mismatch
///645-setMismatch-findErrorNums-set


var findErrorNums = function(nums) {
    let result = []

    let len = nums.length     
    let obj = {}
   for(let i = 0; i < len; i++){
       if(!obj.hasOwnProperty([nums[i]])) obj[nums[i]] = 1
       else 
       {
           obj[nums[i]] = obj[nums[i]] +1
        result.push(nums[i])
       }
   }
   console.log(obj)

   for(let i = 1; i <= len; i++){
       if(!obj.hasOwnProperty(i)){
           result.push(i)
       }
   }
   return result
}





// //////////////////******************* map/set *********************//////////////////////
function findErrorNums(nums){
    let supposedTotal = (1 + nums.length) * nums.length/2

    let m = new Map()
    let sum = 0
    let repeating = 0

    for(let i = 0 ; i < nums.length; i++){
        if (m.has(nums[i])) {
            repeating = nums[i]
            console.log(repeating);
        }
        else m.set(nums[i], 1) 
        console.log(m)

        sum += nums[i]
    }
    
    let missing = supposedTotal - (sum - repeating)

    console.log([repeating, missing])

    return [repeating, missing]
}

//findErrorNums([3,2,3,4,6,5])//[3,1] 
//findErrorNums([1,1])//[1,2]
//findErrorNums([1,3,3]) //[3,2] 
//findErrorNums([1,2,2,4])//[2,3]
//findErrorNums([2,2])//[2,1]
//findErrorNums([3,2,2])//[2,1] 
findErrorNums([1,5,3,2,2,7,6,4,8,9])//[2,10]



// //////////////////******************* map/set *********************//////////////////////
// var findErrorNums = function(nums) {
//     let supposedTotal = (1 + nums.length) * nums.length / 2;
//     console.log("supposedTotal:   ", supposedTotal)

//     let m = new Map() //m creates an obj
//     let sum = 0;
//     let repeating = 0

//     for (let i = 0; i < nums.length; i++) {
//         console.log("::::::::::::::  loop  ::::::::::::::::")

//         if (m.has(nums[i])) {
//             repeating = nums[i]; 
//             console.log("R", repeating);
//         }
//         else m.set(nums[i], 1); //set doesn't repeat
        
//         console.log(":::", m)
        
//         sum += nums[i];
//         console.log("sum:  ", sum)
//     }
    
//     let missing = supposedTotal - (sum-repeating);
//     console.log([repeating, missing])
//     return [repeating, missing];
//     // Time Complexity: O(n)
//     // Space Complexity: O(n)
// };
// //findErrorNums([3,2,3,4,6,5])//[3,1] 
// //findErrorNums([1,1])//[1,2]
// //findErrorNums([1,3,3]) //[3,2] 
// //findErrorNums([1,2,2,4])//[2,3]
// //findErrorNums([2,2])//[2,1]
// //findErrorNums([3,2,2])//[2,1] 
// findErrorNums([1,5,3,2,2,7,6,4,8,9])//[2,10] 










////////////////////****************************************//////////////////////
// I don't know why this works because this solution seems to make it too complicated
// const findErrorNums = (nums) => {
//     let output = []
//     nums.forEach((x,i) => {
//        // console.log("x", x)
//         //console.log(":::i", i)
//         let idx = Math.abs(x)-1 //set up a hyperthetical index based on the number element
//         //console.log("idx", idx)
       
//         nums[idx] < 0 ? output.push(idx+1) : nums[idx] = -nums[idx]
//         //console.log(output)
//     })

//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] > 0){
//             output.push(i+1)
//             //console.log(output)
//             break;
//         }
//     }
//     return output
// }
// I don't know why this works because this solution seems to make it too complicated
//findErrorNums([1,1])//[1,2]
//findErrorNums([1,2,2,4])//[2,3]
//findErrorNums([2,2])//[2,1]
//findErrorNums([3,2,2])//[2,1]
//O(n) Time 944 ms
//O(1) Space 53.3 MB








////////////////////******************* not passing *********************//////////////////////
//brute force
// const findErrorNums = (nums) => {
//     let result = [];

//     nums.sort()
//     console.log(nums)

//     if(nums[0] !== 1){
//         //result.push(nums[0], 1)
//         for(let i = 0; i < nums.length ; i++){
//             if(nums[i] === nums[i+1]){
//                 result.push(nums[i])
//             }
//         }
//         result.push(1)
//     }else{

//     for(let i = 0; i < nums.length ; i++){
//         if(nums[i] !== i+1){
//             result.push(nums[i], i+1)
//                 }
//             }
//     }
//     console.log(result)
//     return result
// }


//findErrorNums([3,2,3,4,6,5])//[3,1] 
//findErrorNums([1,1])//[1,2]
//findErrorNums([1,3,3]) //[3,2] 
//findErrorNums([1,2,2,4])//[2,3]
//findErrorNums([2,2])//[2,1]
//findErrorNums([3,2,2])//[2,1] 
//findErrorNums([1,5,3,2,2,7,6,4,8,9])//[2,10] //NOT PASSING















////////////////////******************* solution but not perfectly understand *********************//////////////////////
// const findErrorNums = (nums) => {
//     let i = 0
//     console.log(nums)

//     while (i < nums.length) { //sort the num arr and move the duplicated num at the end
//         if (nums[i] !== i + 1 && nums[nums[i] - 1] !== nums[i]) { // ?
//             console.log("::::::::", i, nums[i])
//             console.log(nums)
//             console.log(nums[i], "!==", i, "+ 1 && ", nums[nums[i] - 1], "!==", nums[i])
//             const temp = nums[i]
//             nums[i] = nums[nums[i] - 1]
//             nums[temp - 1] = temp
//             console.log(nums) //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 2]
//         } else {
//             i++
//             //console.log(nums)
//         }
//         //console.log(nums)
//     }

//     for (i = 0; i < nums.length; i++) {
//         if (nums[i] !== i + 1) {
//             console.log([nums[i], i + 1])
//             return [nums[i], i + 1]
//         }
//     }
// }

// console.log(findErrorNums([2,2]))
//findErrorNums([1,1])//[1,2]
//findErrorNums([1,2,2,4])//[2,3]
//findErrorNums([2,2])//[2,1]
//findErrorNums([3,2,2])//[2,1]
//findErrorNums([1,5,3,2,2,7,6,4,8,9])//[2,10] 


//time: O(n) Runtime: 92 ms
//space: O(1) Memory Usage: 41.7 MB
