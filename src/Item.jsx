import { memo } from 'react';

// It's a small components, we SHOULDN'T be usign memo here
function Item(props) {
  return (
    <li>
      {props.title}
      <button onClick={() => props.onAddItemToWishList(props.title)}>
        Add to wishlist
      </button>
    </li>
  );
}

export default memo(Item);

/*
export default memo(Item, (prevPros, nextProps) => {
  return false
});
*/
