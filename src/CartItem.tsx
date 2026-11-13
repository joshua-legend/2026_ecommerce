"use client";

import { qtyAdd, qtySub, removeToCart } from "@/utils/hooks";
import { useState } from "react";
import { TCartItem } from "./Item";

const CartItem = ({ id = 0, emoji = "🚬", name = "아이템", price = 1000, count = 1 }: Partial<TCartItem>) => {
  const [cnt, setCnt] = useState<number>(count);

  const remove = () => {
    removeToCart({ id, emoji, name, price });
  };

  return (
    <article className="p-4 flex justify-between border-b border-slate-200">
      <div className="flex gap-1">
        <div className="flex items-center">{emoji}</div>
        <div className="flex flex-col">
          <div>{name}</div>
          <div className="flex justify-between items-center">
            <button
              onClick={() => {
                qtySub({ id, emoji, name, price, count });
              }}
              className="p-2 rounded-lg border border-slate-200"
            >
              -
            </button>
            <span>{cnt}</span>
            <button
              onClick={() => {
                qtyAdd({ id, emoji, name, price, count });
              }}
              className="p-2 rounded-lg border border-slate-200"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <div onClick={remove}>삭제</div>
        <div>{price * cnt}</div>
      </div>
    </article>
  );
};

export default CartItem;
