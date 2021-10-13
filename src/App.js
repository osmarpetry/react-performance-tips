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
      <p>Contagem: {countItemsWithOne}</p>
      <input onChange={(e) => setText(e.target.value)} value={text} />
      <button onClick={() => addItemToList()}>Add</button>
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
    </div>
  );
}

export default App;
