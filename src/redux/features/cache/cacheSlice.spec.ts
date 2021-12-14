import cacheReducer, {
  CacheState,
  hit,
} from './cacheSlice';

import { configureStore } from "@reduxjs/toolkit";

describe("counter reducer", () => {
  const initialState: CacheState = {
    store: {},
    head: null,
    tail: null,
  };
  it("should handle initial state", () => {
    expect(cacheReducer(undefined, { type: 'unknown' })).toEqual({
      store: {},
      head: null,
      tail: null,
    });
  });

  it("should add first item to empty list", () => {
    const actual = cacheReducer(initialState, hit("Chocolate"));
    expect(actual.store).toHaveProperty("Chocolate");
    expect(actual.head).toEqual("Chocolate");
    expect(actual.tail).toEqual("Chocolate");
  });

  [
    {
      title: "should add multiple unique items with correct orders",
      input: ["Chocolate", "Banana", "Strawberry"],
      expectedResults: ["Chocolate", "Banana", "Strawberry"],
    },
    {
      title: "should update duplicated item at tail to the head of the list",
      input: ["Chocolate", "Banana", "Banana"],
      expectedResults: ["Banana", "Chocolate"],
    },
    {
      title: "should update duplicated item in the middle to the head of the list",
      input: ["Chocolate", "Banana", "Strawberry", "Banana"],
      expectedResults: ["Banana", "Chocolate", "Strawberry"],
    },
    {
      title: "should not update the list if item added is duplicated with head item of the list",
      input: ["Chocolate", "Banana", "Strawberry", "Chocolate"],
      expectedResults: ["Chocolate", "Banana", "Strawberry"],
    },
  ].forEach((testObj) => {
    it(testObj.title, () => {
      // Initialize store
      const store = configureStore({
        reducer: {
          cache: cacheReducer,
        },
      });
  
      // Dispatch action to update store
      for (let item of testObj.input) {
        store.dispatch(hit(item));
      }
  
      // Create dummyhead to generate list for assertions
      let listItems = [];
      let dummyHead = store.getState().cache.head;
      while (!!dummyHead) {
        listItems.push(dummyHead);
        const currNode = store.getState().cache.store[dummyHead];
        dummyHead = currNode.next;
      }

      expect(testObj.expectedResults).toEqual(listItems);
    });  
  })
});
