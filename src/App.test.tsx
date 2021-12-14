import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import App from './App';

describe('App', () => {
  // Smoke test
  test('should renders title', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  
    expect(getByText(/LRU \(Least Recently Used\) Cache Visualization Playground/i)).toBeInTheDocument();
  });
  
  test('should add new item to the list tail', async () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const input = getByLabelText('cache-input');
    const confirmButton = getByLabelText('hit-cache');
    
    fireEvent.change(input, { target: { value: 'TESTING!!!!' } }); // Input text field
    fireEvent.click(confirmButton); // click hit button

    const items = await screen.findAllByLabelText('cache-node'); // Get the cache node list
    const itemsLength = items.length;
    expect(items[itemsLength - 1]).toHaveTextContent(/^TESTING!!!!$/i); // Check if last item is the cache added just now
  });
})
