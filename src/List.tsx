"use client";

import { useEffect, useState } from "react";
import { TCartItem } from "./Item";
import CartItem from "./CartItem";

const List = () => {
  const [items, setItems] = useState<TCartItem[]>([]);
  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    const data: TCartItem[] = cart ? JSON.parse(cart) : [];
    setItems((prev) => data);
  }, []);

  return (
    <section>
      {items.map((v) => (
        <CartItem key={v.id} {...v} price={typeof v.price == "string" ? +v.price : v.price} />
      ))}
    </section>
  );
};

export default List;
