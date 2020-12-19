//10/10/2020 WWC Coffee break
//also with Aleksa 

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true



// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true
 

let isValid = function(s) {  //s = "()"
    let stack = []; //["("]

    const mapping = {
        ')': '(',  //closing has to be the key
        '}': '{', 
        ']': '['
    };

    for (let i = 0; i < s.length; i++) { 
        if (s[i] in mapping) { //s[i] == "("   ///key ")"
            const curr = stack.pop();
            if (mapping[s[i]] !== curr) { //value "("
                return false; 
            }
        } else {
            stack.push(s[i]); //push "("
        }
    }

    //current stat::: stack = ["("]
    return !stack.length;
};

//2nd
    let stack = []; //[] 

    const mapping = {
        ')': '(',  //closing has to be the key
        '}': '{', 
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        if (s[i] in mapping) { //s[i] == ")"   ///key ")"
            const curr = stack.pop(); //"("
            if (mapping[s[i]] !== curr) { // "(" !== "(" 
                return false; //not false
            }
        } else {
            stack.push(s[i]); //not else ////only pushing opening bracket (val)
        }
    }

    //current stat::: stack = []
    return !stack.length;// if it's empty then true
    //if there's any in the stack then it's false




    // for(let i =0; i< str.length; i++){ //  “(“
    //     Let symbol = “(){}[]”
    // if(str[i].includes()){
    //         if(for str[i]  in map){ //key
    //             Let current = stack.pop()
    //         if( //value
    // } 
    
    // stack.push(str[i])  //only pushing opening bracket (val)
    // } //end of symbol if statement
    
    // Return !stack.length //if the stack is empty === true
    // //if there’s anything in the stack === false

    // Time : O(n)
    // Space: O(n)















// function isValid(s){
//     // 1
// if (s.length === 0) return true
// if (s.length === 1) return false
// if (s.length % 2 !== 0) return false

// const dictionary = {
// 	'}': '{',
// 	')': '(',
// 	']': '['
// }
// const stack = []

// for (let i = 0; i < s.length; i++) {
// 	const currChar = s[i]
// 	const lastChar = stack[stack.length - 1]
// 	const delChar = dictionary[currChar]

// 	if (delChar) {
// 		// 2
// 		if (delChar === lastChar) {
// 			stack.pop()
// 		} else {
// 			return false
// 		}
// 	} else {
// 		stack.push(currChar)
// 	}
// }

// // 3
// return !stack.length
// }