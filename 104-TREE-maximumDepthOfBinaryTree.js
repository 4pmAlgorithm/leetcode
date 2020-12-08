//https://leetcode.com/problems/maximum-depth-of-binary-tree/



//Solution 2: recursive
var maxDepth = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1; //adding one everytime there's a recursive action. 
};

//Solution 1: non-recursive
var maxDepth = function(root) {
    if (!root) return 0;
    const queue = [root];
    let depth = 0;
    while (queue.length !== 0) {
        depth++;
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }
        queue.splice(0, len);
    }
    return depth;
}
