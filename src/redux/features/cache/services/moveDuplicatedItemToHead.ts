import { Draft } from "@reduxjs/toolkit";
import { CacheState } from '../cacheSlice';

export default function moveDuplicatedItemToHead(state: Draft<CacheState>, item: string) {
  // The item to be moved is the head item. Nothing need to be done.
  if (item === state.head) return;

  // Assign item.prev.next to item.next
  state.store[state.store[item].prev!].next = state.store[item].next; // Must have state.store[item].prev

  // If item has next, assign item.next.prev to item.prev
  if (state.store[item].next) { state.store[state.store[item].next!].prev = state.store[item].prev; }

  // If item is tail, it's going to be moved and we need a new tail. Assign item.prev to tail.
  if (item === state.tail) { state.tail = state.store[item].prev }

  state.store[item].next = state.head;
  state.store[item].prev = null;

  state.store[state.head!].prev = item;
  state.head = item;
}