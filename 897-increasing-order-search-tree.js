var increasingBST = function(root) {
    if(!root) return null;
    let stack = [], newRoot = null, newTree = null;
  
    
   while(root){
        // left
        while(root){
            stack.push(root); //[5, 1, 7]
            console.log("root.left", root.left)
            root = root.left; // root = [1]
            console.log("stack", stack)
        }
        
        
        
        //pop
         while(stack.length > 0){
            // read/visit
            let node = stack.pop();
            console.log("node::::   ", node)
            
            if(!newRoot){ //if there's no newRoot
                newRoot = newTree = node;
                console.log("NEW ROOT*****", newRoot)
            } else {  //if there IS a newRoot
                newTree.right = node;
                newTree = newTree.right;
            }
            
            node.left = null;
            
             
             
            // right
            if(node.right){
                root = node.right;
                console.log("RIGHT root:::::::::::::::::: ", root )
                console.log("NEW ROOT*****", newRoot)
                break;
            }
        }
  }
    console.log("NEW ROOT*****", newRoot)
    return newRoot;
}
