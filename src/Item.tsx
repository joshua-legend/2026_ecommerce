"use client";

import { addToCart } from "@/utils/hooks";

export type ItemProps = {
  id: number;
  emoji: string;
  name: string;
  price: number;
};

export type TCartItem = ItemProps & { count: number };

const Item = ({ id = 0, emoji = "", name = "이름없음", price = 0 }: Partial<ItemProps>) => {
  const add = () => {
    addToCart({ id, emoji, name, price });
  };

  return (
    <article className="h-72 w-full border border-slate-100 rounded-lg p-1 flex flex-col justify-between">
      <div
        className="
        w-full
        h-1/2
      bg-violet-50 flex justify-center items-center
        "
      >
        {emoji}
      </div>
      <div className="font-semibold">{name}</div>
      <div className="text-slate-200">{price}</div>
      <button onClick={add} className="w-full py-1 rounded-lg bg-indigo-400 text-white">
        담기
      </button>
    </article>
  );
};

export default Item;
