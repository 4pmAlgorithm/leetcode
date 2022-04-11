// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: nums = [0,0,0,0]
// Output: [[0,0,0]]

//7 4/10/2022 Sun 9:11 - 9:19pm
//6 4/10/2022 Sun 9:00 - 9:11pm
//5 w diana
//4 4/05/2022 Tues 3:30 - 
//3 3/30/2022 Wed 1:50 - 
//2 3/30/2022 Wed 10:47 - 1:50 3hrs 
//1 3/29/2022 Tues 5:35 - 7:35


//8 4/11/2022 Mon 12:40-12:57
function threeSum(arr){
    let result = [];
    
    arr = arr.sort((a,b) => a-b)
    
    for(let i=0; i< arr.length-2; i++){
        
        let j = i+1;
        let k = arr.length-1;
        
        if(i > 0 && arr[i] === arr[i-1]) continue;
        
        while(j < k){
            
            let sum = arr[i] + arr[j] + arr[k]
            if(sum === 0){
                result.push([arr[i], arr[j], arr[k]])
                
                    while(arr[j]===arr[j+1])j++ 
                    while(arr[k]===arr[k-1])k--
                    
                    j++;
                    k--;
                }else if( sum < 0){
                    j++
                }else{
                   k--
                }
            }
        }
    console.log(result)
    return result;
}

//7 4/10/2022 Sun 9:11 - 9:19pm
function threeSum(arr){
    
    let result = [];
    
    arr = arr.sort((a, b) => a-b)
    
   for(let i = 0; i < arr.length-2; i++){
       
       let j = i+1;
       let k = arr.length-1
       
       if(arr[i]===arr[i-1])continue;
       
       while( j < k){
           let sum = arr[i] + arr[j] + arr[k]
           if(sum === 0){
               result.push([arr[i], arr[j], arr[k]])
           
                while(arr[j]===arr[j+1])j++
                while(arr[k]===arr[k-1])k--
           
               j++
               k--
           }else if( sum < 0){
               j++
           }else{
               k--
           }
       }
   }
    return result
}




//6
function threeSum(arr){
    
    arr = arr.sort((a, b) => a-b)
    let result = []
    
    for(let i = 0; i < arr.length-2; i++){
        
        if( i > 0 && arr[i] === arr[i-1]) continue;
        
        let j = i+1;
        let k = arr.length-1;
        
        while(j < k){
            let sum = arr[i] + arr[j] + arr[k]

            if( sum === 0){
                result.push([arr[i], arr[j], arr[k]])
              
                
                while(  arr[j] === arr[j+1]) j++
                while(  arr[k] === arr[k-1]) k--    
                
                j++;
                k--;
                
            } else if( sum < 0){
                j++
            }else{ 
                k--
            }
        }
    }
    //console.log(result)
    return result
}


//solution with comments
function threeSum(nums) {
	const results = []

	// obviously irrelevant if we don't have at least 3 numbers to play with!
	if (nums.length < 3) return results

	// having the numbers in ascending order will make this problem much easier.
	// also, knowing the overall problem  will take at least O(N^2) time, we can
	// afford the O(NlogN) sort operation
	nums = nums.sort((a, b) => a - b)

    // if the question asks us for a custom target, we can control it here
	let target = 0

	for (let i = 0; i < nums.length - 2; i++) {
		// `i` represents the "left" most number in our sorted set.
		// once this number hits 0, there's no need to go further since
		// positive numbers cannot sum to a negative number
		if (nums[i] > target) break

		// we don't want repeats, so skip numbers we've already seen
		if (i > 0 && nums[i] === nums[i - 1]) continue

		// `j` represents the "middle" element between `i` and `k`.
		// we will increment this up through the array while `i` and `k`
		// are anchored to their positions. we will decrement `k` for
		// for each pass through the array, and finally increment `i`
		// once `j` and `k` meet.
		let j = i + 1

		// `k` represents the "right" most element
		let k = nums.length - 1
		
		// to summarize our setup, we have `i` that starts at the beginning,
		// `k` that starts at the end, and `j` that races in between the two.
		//
		// note that `i` is controlled by our outer for-loop and will move the slowest.
		// in the meantime, `j` and `k` will take turns inching towards each other depending
		// on some logic we'll set up below. once they collide, `i` will be incremented up
		// and we'll repeat the process.

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]

			// if we find the target sum, increment `j` and decrement `k` for
			// other potential combos where `i` is the anchor
			if (sum === target) {
				// store the valid threesum
				results.push([nums[i], nums[j], nums[k]])

				// this is important! we need to continue to increment `j` and decrement `k`
				// as long as those values are duplicated. in other words, we wanna skip values
				// we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
				// [[-2,0,2], [-2,0,2]].
				//
				// (i'm not a fan of this part because we're doing a while loop as we're
				// already inside of another while loop...)
				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--

				// finally, we need to actually move `j` forward and `k` backward to the
				// next unique elements. the previous while loops will not handle this.
				j++
				k--

			// if the sum is too small, increment `j` to get closer to the target
			} else if (sum < target) {
				j++

			// if the sum is too large, decrement `k` to get closer to the target
			} else { // (sum > target)
				k--
			}
		}
	}

	return results
};


//2 3/30/2022 Wed 10:47 - 
function threeSum(arr){

    let result = []

    let nums = arr.sort((a,b) => a-b)
    console.log(nums)

    for(let i = 0 ;  i < nums.length-2; i++){//1st point
        
        if(nums[i] > 0) break;
      

        let j = i + 1 //2nd point
        let k = nums.length-1 //3rd point

        console.log("::::", [nums[i], nums[j], nums[k]])

        while( j < k ){
        
            console.log("::::::::::::", [nums[i], nums[j], nums[k]])
            if(nums[i] + nums[j] + nums[k] === 0){
                result.push([nums[i], nums[j], nums[k]])
            
                j++
                k--

                while( nums[j] === nums[j-1]) j++
                while( nums[k] === nums[k+1]) k--
        }
    }
    console.log(result)
    return result
}
}
//threeSum([-1,0,1,2,-1,-4])
threeSum([0,0,0,0])





// // // //1 3/29/2022 Tues 5:35 - 7:35
function threeSum(arr){

    let result = []

    if(arr.length < 3){
        console.log([])
        return result
    }

    let sorted = arr.sort((a,b) => a -b)

    let target = 0;
    
    for(let i = 0; i < sorted.length-2; i++){ // i = left point

        if(sorted[i] > target) break;

        if( i > 0 && sorted[i] === sorted[i-1] ) continue;

        let j = i + 1; //middle point

        let k = sorted.length - 1; //right point

        while( j < k){
            let sum = sorted[i] + sorted[j] + sorted[k]
            if(sum === target){
                result.push([sorted[i], sorted[j], sorted[k]])
             
                j++
                k--

                while(j < k && sorted[j] === sorted[j-1]) j++ //I don't get this part yet. why do they need to be compared?
                while(j < k && sorted[k] === sorted[k+1]) k--

            } else if(sum < target){
                j++
            }else{
                k--
            }
        } 
    }
    console.log(result)
    return result
}

// threeSum([-1,0,1,2,-1,-4])