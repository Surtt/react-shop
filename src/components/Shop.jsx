import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = (good) => {
    const goodIndex = order.findIndex((orderGood) => orderGood.id === good.id);

    if (goodIndex < 0) {
      const newGood = { ...good, quantity: 1 };
      setOrder([...order, newGood]);
    } else {
      const newOrder = order.map((orderGood, index) => {
        if (index === goodIndex) {
          return {
            ...orderGood,
            quantity: orderGood.quantity + 1,
          }
        } else {
          return orderGood;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(good.name);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const removeFromBasket = (id) => {
    const newOrder = order.filter((item) => item.id !== id);
    setOrder(newOrder);
  };

  const incQuantity = (id) => {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + 1;
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (id) => {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity - 1;
        return { ...item, quantity: newQuantity >= 0 ? newQuantity : 0 };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  useEffect(function getGoods () {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      },
    }).then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);
  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
      {isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity} />}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
};

export default Shop;
