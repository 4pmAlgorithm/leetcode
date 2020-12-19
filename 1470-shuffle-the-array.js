var shuffle = function(nums, n) {
    let result= []
    for(let i = 0; i <n; i++){  //x  ntimes
         result.push(nums[i], nums[i+n])
    }
    return result
};
