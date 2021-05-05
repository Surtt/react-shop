import BasketItem from './BasketItem';

const BasketList = (props) => {
  const { order, handleBasketShow, removeFromBasket, incQuantity, decQuantity } = props;

  const totalPrice = order.reduce((sum, { price, quantity }) => {
    return sum + price * quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active deep-orange darken-2">Cart</li>
      {
        order.length ? order.map((item) => (
          <BasketItem
            key={item.id}
            { ...item }
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        )) :<li className="collection-item">The shopping cart is empty</li>
      }
      <li className="collection-item active deep-orange darken-2">
        Total amount: {totalPrice} eur
      </li>
      <li className="collection-item">
        <button className="deep-orange darken-2 btn-small">Pay for the order</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
    </ul>
  );
};

export default BasketList;
