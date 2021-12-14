import { useEffect, useState, useCallback } from 'react';
import CacheContainer from './components/CacheContainer';

// Components
import ControlContainer from './components/ControlContainer';
import ListNode from './components/ListNode';

// Redux
import { useAppDispatch, useAppSelector } from './redux/app/hooks';
import { hit } from './redux/features/cache/cacheSlice';

function App() {
  const cacheHead = useAppSelector((state) => state.cache.head);
  const dispatch = useAppDispatch();

  const [text, setText] = useState("");

  // Setup some initial items
  useEffect(() => {
    dispatch(hit("Chocolate"))
    dispatch(hit("Banana"))
    dispatch(hit("Strawberry"))
    dispatch(hit("Coconut"))
    dispatch(hit("Apple"))
    dispatch(hit("Orange"))
  }, []);

  const onChangeText = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  }, []);

  const hitCacheWithItem = useCallback(() => {
    if (!!text) {
      dispatch(hit(text))
    }
  }, [text, dispatch]);

  return (
    <div className="App">
      <h1>LRU (Least Recently Used) Cache Visualization Playground</h1>
      <ControlContainer>
        <input type="text" aria-label="cache-input" onChange={onChangeText} value={text} />
        <button aria-label="hit-cache" onClick={hitCacheWithItem}>Hit cache</button>
      </ControlContainer>
      <CacheContainer>
        <ListNode nodeId={cacheHead} />
      </CacheContainer>
    </div>
  );
}

export default App;
