"use client";

import CartItem from "./CartItem";
import { useCart } from "@/utils/hooks";

const List = () => {
  const { total } = useCart();

  return (
    <section>
      {total.map((v) => (
        <CartItem key={v.id} {...v} />
      ))}
    </section>
  );
};

export default List;
