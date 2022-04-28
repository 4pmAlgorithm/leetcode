//2022/04/27
function groupAnagrams(strs){
    let dict = {}
    strs.map((word) => {
        dict[word.split("").sort()]?  dict[word.split("").sort()].push(`${word}`) :
            dict[word.split("").sort()] = [`${word}`]
      
    })
    console.log(Object.values(dict))
    return Object.values(dict)
}

groupAnagrams(["eat","tea","tan","ate","nat","bat"])


//2022/04/26
// function groupAnagrams(strs){
//     let obj = {}
//     strs.map(each => {
//         let eachWord = each.split("").sort().join("")
//         console.log(eachWord)
//         obj[eachWord] ? obj[eachWord].push(each) : obj[eachWord] = [each]
//     })
//    console.log(Object.values(obj))
//     return Object.values(obj)
// }


//2022/04/26  5:00pm - 5: 45pm 
// var groupAnagrams = function(strs) {  
//     let dict = {}
//     strs.map(each => {
//         let eachArr = [...each].sort()
//         //console.log(eachArr)
//         if(!dict.hasOwnProperty(eachArr)){
//         dict[eachArr] = [`${each}`]
//         } else {
//             dict[eachArr].push(each)
//         }
//     })
//     return Object.values(dict)
//};