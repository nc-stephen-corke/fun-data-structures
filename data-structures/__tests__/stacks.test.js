const createStack = require('../stack');

describe('createStack', () => {
  test('check if returned object has a quantity property which is initialised with 0', () => {
    const testStack = createStack();
    expect(testStack.quantity).toBe(0);
  });
  test('check if returned object has a storage property which is initialised as an empty object', () => {
    const testStack = createStack();
    expect(testStack.storage).toEqual({});
  });
  test('check if returned object has a maxSize property which is initialised with the passed in value', () => {
    const testStack = createStack(5);
    expect(testStack.maxSize).toBe(5);
    const testStackTwo = createStack(17);
    expect(testStackTwo.maxSize).toBe(17);
  });
  test('check that the default value of maxSize in 3 if no value in passed in', () => {
    const testStack = createStack();
    expect(testStack.maxSize).toBe(3);
  });
  // A push method, which adds items to the stack storage, provided the stack is not already full.
  // const testStack = createStack();
  // testStack.push('apple');
  // testStack.storage; // { 1 : 'apple' }
  // testStack.push('orange');
  // testStack.storage; // { 1 : 'apple', 2 : 'orange' }
  describe('push method', () => {
    test('check if returned object has a method of push', () => {
      const testStack = createStack(5);
      expect(typeof testStack.push).toBe('function');
    });
    test('check if the push method add the passed in item to the storage on a key of 1', () => {
      const testStack = createStack();
      // arrange
      // act
      const pushOutput = testStack.push('apple');
      // assert
      expect(pushOutput).toBe(undefined);
      expect(testStack.storage).toEqual({ 1: 'apple' });
      expect(testStack.quantity).toBe(1);
    });
    // what happens of we push another item?

    // what happens if push an item when the maxStorage has been reached
  });
});
