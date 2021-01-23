var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies)
    const arr = candies.map(candy => {
        if(candy + extraCandies >= max) return true
        else return false
    })
    return arr;
};