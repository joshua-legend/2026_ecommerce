"use client";

type ItemProps = {
  id: number;
  emoji: string;
  name: string;
  price: string | number;
};

export type CartItem = ItemProps & { count: number };

const Item = ({ id, emoji = "", name = "이름없음", price = 0 }: Partial<ItemProps>) => {
  const add = () => {
    if (id == null) return;
    const cart = window.localStorage.getItem("cart");
    const data: CartItem[] = cart ? JSON.parse(cart) : [];
    const found = data.find((v) => v.id == id);
    if (found) {
      found.count += 1;
    } else {
      data.push({ id, emoji, name, price, count: 1 });
    }
    window.localStorage.setItem("cart", JSON.stringify(data));
    window.dispatchEvent(new Event("cart-change"));
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
