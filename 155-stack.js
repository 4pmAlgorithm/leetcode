//11/16/2020 Monday pair with Diana 
//https://leetcode.com/problems/min-stack/
//155 stack

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
 
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2


var MinStack = function() {
    this.stack = [];
  this.min = [];
};

MinStack.prototype.push = function(x) {
  if(!this.min.length) this.min.push(x);
  else this.min.push(Math.min(x, this.getMin()));
  this.stack.push(x)
};


MinStack.prototype.pop = function() {
  this.min.pop();
  return this.stack.pop();
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1]
};


MinStack.prototype.getMin = function() {
  return this.min[this.min.length-1]
};