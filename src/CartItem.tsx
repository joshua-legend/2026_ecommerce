"use client";

import { useState } from "react";

type CartItemProps = {
  emoji: string;
  name: string;
  price: number;
  count: number;
};

const CartItem = ({ emoji = "🚬", name = "아이템", price = 1000, count = 1 }: Partial<CartItemProps>) => {
  const [cnt, setCnt] = useState<number>(count);

  const add = () => {
    setCnt((prev) => prev + 1);
  };

  const sub = () => {
    setCnt((prev) => (prev == 1 ? 1 : prev - 1));
  };

  return (
    <article className="p-4 flex justify-between border-b border-slate-200">
      <div className="flex gap-1">
        <div className="flex items-center">{emoji}</div>
        <div className="flex flex-col">
          <div>{name}</div>
          <div className="flex justify-between items-center">
            <button onClick={sub} className="p-2 rounded-lg border border-slate-200">
              -
            </button>
            <span>{count}</span>
            <button onClick={add} className="p-2 rounded-lg border border-slate-200">
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>삭제</div>
        <div>{price * cnt}</div>
      </div>
    </article>
  );
};

export default CartItem;
