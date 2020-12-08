//12/07/2020

//Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].

//Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
//Output: 32


function rangeSumBST(root, L, R){
    return dfs(root, L, R)
}

function dfs(root, L, R, res = 0){
    if(!root) return 0;
    if(root.val >= L && root.val <= R){
        res = root.val;
    }
    return res + dfs(root.left, L, R) + dfs(root.right, L, R)
} 


console.log(rangeSumBST([10,5,15,3,7,13,18,1,null,6], 6, 10))//23
rangeSumBST([10,5,15,3,7,null,18], 7, 15)//32

