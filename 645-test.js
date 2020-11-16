
//////////////////******************* map/set *********************//////////////////////
var findErrorNums = function(nums) {
    let supposedTotal = (1 + nums.length) * nums.length / 2;
    console.log("supposedTotal:   ", supposedTotal)

    let m = new Map() //m creates an obj
    let sum = 0;
    let repeating = 0

    for (let i = 0; i < nums.length; i++) {
        console.log("::::::::::::::  loop  ::::::::::::::::")

        if (m.has(nums[i])) {
            repeating = nums[i]; 
            console.log("R", repeating);
        }
        else m.set(nums[i], 1); //set doesn't repeat
        
        console.log(":::", m)
        
        sum += nums[i];
        console.log("sum:  ", sum)
    }
    
    let missing = supposedTotal - (sum-repeating);
    console.log([repeating, missing])
    return [repeating, missing];
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};
//findErrorNums([3,2,3,4,6,5])//[3,1] 
//findErrorNums([1,1])//[1,2]
//findErrorNums([1,3,3]) //[3,2] 
//findErrorNums([1,2,2,4])//[2,3]
//findErrorNums([2,2])//[2,1]
//findErrorNums([3,2,2])//[2,1] 
findErrorNums([1,5,3,2,2,7,6,4,8,9])//[2,10] 

