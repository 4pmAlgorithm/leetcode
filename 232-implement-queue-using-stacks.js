//11/20/2020 Friday

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.


/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = [];
     this.temp = [];
 };
 
//  /**
//   * Push element x to the back of queue. 
//   * @param {number} x
//   * @return {void}
//   */
 MyQueue.prototype.push = function(x) {  //2
     
     while(this.stack.length !== 0){
         this.temp.push(this.stack.pop())
         console.log("::::1 ", this.stack)
     }
     this.stack.push(x) 
     
     while(this.temp.length !== 0){
         this.stack.push(this.temp.pop())
          console.log("::::2 ", this.stack)
     }
     console.log(":::::::3", this.stack)
 };
 
//  /**
//   * Removes the element from in front of queue and returns that element.
//   * @return {number}
//   */
  MyQueue.prototype.pop = function() {
    return this.stack.pop() 
    
 };
 
//  /**
//   * Get the front element.
//   * @return {number}
//   */
 MyQueue.prototype.peek = function() {
     return this.stack[this.stack.length-1] //only show the first element of the queue
 };
 
//  /**
//   * Returns whether the queue is empty.
//   * @return {boolean}
//   */
 MyQueue.prototype.empty = function() {
   //  return this.stack.isEmpty()
     if(this.stack.length === 0 || this.stack[0] === "empty"){
         
         return true
     }else {
         return false
     }
 };
 
 /** 
  * Your MyQueue object will be instantiated and called as such:
  * var obj = new MyQueue()
  * obj.push(x)
  * var param_2 = obj.pop()
  * var param_3 = obj.peek()
  * var param_4 = obj.empty()
  */