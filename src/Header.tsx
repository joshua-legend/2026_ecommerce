"use client";

import Link from "next/link";
import { CartItem } from "./Item";
import { useEffect, useState } from "react";

const Header = () => {
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const read = () => {
      const cart = window.localStorage.getItem("cart");
      const data: CartItem[] = cart ? JSON.parse(cart) : [];
      setTotal((prev) => data.reduce((a, c) => a + c.count, 0));
    };
    read();
    window.addEventListener("cart-change", read);
    return () => window.removeEventListener("cart-change", read);
  }, []);

  return (
    <header className="p-2 border-b border-b-slate-100">
      <nav className="w-full max-w-5xl mx-auto flex justify-between">
        <Link href={"/"}>모아마켓</Link>
        <Link href={"/cart"}>장바구니 {total}</Link>
      </nav>
    </header>
  );
};

export default Header;
