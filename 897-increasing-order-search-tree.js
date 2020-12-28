//Dec 27th algo with a new solution
// Dec 23rd algo w Senada
// //DEC 22nd algo with Diana
// //DEC 20th algo w/ Diana

/**
 * Definition for a binary tree node.
 

 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
  
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

 var increasingBST = function(root) { //[5,1,7]
    let result =  []

    function inOrder(node){
        if(!node)return;
        inOrder(node.left);
        result.push(node.val);
        inOrder(node.right)

    }
    inOrder(root);
    console.log(result)

    let tempNode = new TreeNode(0);
    let returnNode = tempNode;

    for(let i = 0; i < result.length; i++){
        tempNode.right = new TreeNode(result[i]);
        tempNode = tempNode.right
    }
    
    return returnNode.right
 }





// var increasingBST = function(root) { //[5,1,7]
//     if(!root) return null;
//     let stack = [], newRoot = null, newTree = null;
    
  
//    while(root){ // outer while loop
    
//         // left

//         //1st while loop 
//         while(root){ //root === [5, 1, 7]
//             console.log("***** 1st while LOOP **** ")
//             stack.push(root); //[5, 1, 7]
//             //stack === [ [5, 1, 7] ]
//             console.log("root.left :: BEFORE     ::", root.left) //[1]

//             root = root.left; // root = [1]

//             console.log("stack     :", stack)   //[ [5, 1, 7] ]
//             console.log("root   :", root)
//             console.log("newRoot   :", newRoot)
//             console.log("newTree   :", newTree)
//             console.log("******** END 1st while LOOP **** ")
//         }

//         // while(root){ //root === [1]
//         //     stack.push(root); 
//         //     //stack === [ [5, 1, 7], [1] ]
//         //     console.log("root.left", root.left) //null

//         //     root = root.left; // root = null
//         //     console.log("stack", stack)
//         //     //[ [5, 1, 7], [1] ]
//         // }
        
        
//         //2nd while loop 
//         //pop
//          while(stack.length > 0){ // [ [5, 1, 7], [1] ] 2 > 0
//             console.log("***** 2nd while LOOP **** ")
            
//             // read/visit
//             let node = stack.pop(); //node === [1]
            
//             if(!newRoot){ //if there's no newRoot //newRoot === null TRUTHY

//             console.log("***** 2nd while loop IF ")


//             newRoot = newTree = node; //[1]
                
//                 // newRoot = newTree //null
//                 // newTree = node //[1]
//                 // newRoot = node //[1]

//                 console.log("stack     :", stack)   //[ [5, 1, 7] ]
//                 console.log("root   :", root)
//                 console.log("newRoot   :", newRoot)
//                 console.log("newTree   :", newTree)
//                 console.log("node  : ", node)

//             } else {  //if there IS a newRoot
//                 console.log("***** 2nd while loop else ")
//                 newTree.right = node;
//                 newTree = newTree.right;

//                 console.log("stack     :", stack)   //[ [5, 1, 7] ]
//                 console.log("root   :", root)
//                 console.log("newRoot   :", newRoot)
//                 console.log("newTree   :", newTree)
//                 console.log("node  : ", node)

//             }
            
//             node.left = null; //[1].left = null
            
//             // right
//             if(node.right){ //node === [1] so it's FALSEY
//                 console.log("***** 2nd while loop 2nd IF ")

//                 root = node.right; 

//                 console.log("stack     :", stack)   //[ [5, 1, 7] ]
//                 console.log("root   :", root)
//                 console.log("newRoot   :", newRoot)
//                 console.log("newTree   :", newTree)
//                 console.log("node  : ", node)

//                 break;
//             }
//             console.log(" **** END 2nd  while LOOP **** ")
//         }




//                 // //pop
//                 // while(stack.length > 0){ // [ [5, 1, 7] ] 1 > 0
//                 //     // read/visit
//                 //     let node = stack.pop(); //node === [5,1,7]
//                 //     console.log("node::::   ", node)
                    
//                 //     if(!newRoot){ //skip bc we have newRoot === [1]
        
//                 //     newRoot = newTree = node; //skip
        
//                 //     } else {  //if there IS a newRoot YES
//                                 //newTree = [1]
//                 //         newTree.right = node; // newTree.right = [5,1,7]
//                 // newTree === [1, null, [5,1,7]]
//                 //         newTree = newTree.right; newTree = [5,1,7]
//                 // newTree === [[5,1,7], null, null]
//                 //     }
                    
//                 //     node.left = null; //[5,1,7].left = null
//                 // [5,1,7] ==> [5, null, 7]
                    
                     
                     
//                 //     // right
//                 //     if(node.right){ //node === [1] so it's FALSEY
//                 //         root = node.right; 
//                 //         console.log("RIGHT root:::::::::::::::::: ", root )
//                 //         console.log("NEW ROOT*****", newRoot)
//                 //         break;
//                 //     }
//                 // }
//   }
//     console.log("NEW ROOT*****", newRoot)
//     return newRoot; //[1, null, 5, null, 7]
// }

// // [5, 1, 7] [val, left, right] node.left == [5, null, 7]
// // node.right == null [5, null, null]
// // [1] === [1, null, null]
// // [7] === [7, null, null]

console.log(increasingBST([5,1,7]))