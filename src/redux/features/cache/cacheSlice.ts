import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import appendNewItem from './services/appendNewItem';
import moveDuplicatedItemToHead from './services/moveDuplicatedItemToHead';

interface IStore {
  [item: string]: IDoublyLinkedListNode
}

export interface IDoublyLinkedListNode {
  next: string | null;
  prev: string | null;
}

/**
 * This is a hashmap serializable doublely linked list.
 */
export interface CacheState {
  store: IStore,
  head: string | null
  tail: string | null
}

const initialState: CacheState = {
  store: {},
  head: null,
  tail: null,
};

export const cacheSlice = createSlice({
  name: 'cache',
  initialState,
  reducers: {
    hit: (state, action: PayloadAction<string>) => {
      const item = action.payload;
      if (!item) throw new Error("Item cannot be empty");

      if (state.store.hasOwnProperty(item)) { // Duplicated item
        moveDuplicatedItemToHead(state, item);
      } else { // New item
        appendNewItem(state, item);
      }
    },
  },
});

// Actions
export const { hit } = cacheSlice.actions;

export default cacheSlice.reducer;
