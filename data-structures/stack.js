// push is invoked
// we need the value
// we need to mutate the storage object on the instance

function push(item) {
  // this is always the object that the method was called on
  this.storage[1] = item;
  this.quantity++;
}

function createStack(maxSize) {
  if (!maxSize) {
    maxSize = 3;
  }
  // build your stack object inside this factory function

  // 1. object instantiation
  const stack = {};

  // 2. object decoration
  stack.quantity = 0;
  stack.storage = {};
  stack.maxSize = maxSize; // maxSize is 3 if no arg passed

  // 3. add methods
  stack.push = push;

  // 4. return the object
  return stack;
}

module.exports = createStack;
