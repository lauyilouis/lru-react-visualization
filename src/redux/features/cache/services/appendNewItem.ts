import { Draft } from "@reduxjs/toolkit";
import { CacheState, IDoublyLinkedListNode } from '../cacheSlice';

export default function appendNewItem(state: Draft<CacheState>, item: string) {
  const newNode: IDoublyLinkedListNode = { next: null, prev: null };
  state.store[item] = newNode;

  if (state.head === null || state.tail === null) { // Empty list. Update head and tail.
    state.head = item;
    state.tail = item;
  } else { // Non-empty list. Append item to tail.
    state.store[state.tail].next = item;
    newNode.prev = state.tail;
    state.tail = item;
  }
}