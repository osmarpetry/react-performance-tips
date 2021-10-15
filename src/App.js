import './App.css';
import { useState, useMemo, useCallback } from 'react';
import Item from './Item';

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [wishlist, setWishlist] = useState([]);

  function addItemToList() {
    setItems((prevState) => [...prevState, `Item ${items.length}`]);
  }

  const addItemToWishList = useCallback(
    (item) => {
      console.log(
        'Only use on referential equality (not shallow), with component thats is used multiple places'
      );
      setWishlist((prevState) => [...prevState, item]);
    },
    [wishlist]
  );

  const countItemsWithOne = useMemo(() => {
    console.log('Only use useMemo when the function complexity is big');

    return items.filter((item) => item.includes('1')).length;
  }, [items]);

  return (
    <div>
      <h1>Todo Coinbase</h1>
      <p>Contagem: {countItemsWithOne}</p>
      <form onSubmit={(e) => {
        e.preventDefault()
        addItemToList()
        }}>
        <label for="new-todo-text">Add a new task</label>
        <div>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            aria-describedby="example"
            search
            required
          />
          <button type="submit">
            Add
          </button>
        </div>
        <div class="example">
          Example: Feed the bird
        </div>
      </form>
      <ul>
        {items.map((item) => {
          return (
            <Item
              key={item}
              title={item}
              onAddItemToWishList={addItemToWishList}
            />
          );
        })}
      </ul>
      <div role="status" aria-live="polite" id="sc_feedback" class="sc_feedback">
           {
           // Area to be pronounceable by screen readers
           }
        </div>
    </div>
  );
}

export default App;
