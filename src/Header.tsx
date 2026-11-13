"use client";
import Link from "next/link";
import { useCart } from "@/utils/hooks";

const Header = () => {
  const { result } = useCart();
  return (
    <header className="p-2 border-b border-b-slate-100">
      <nav className="w-full max-w-5xl mx-auto flex justify-between">
        <Link href={"/"}>모아마켓</Link>
        <Link href={"/cart"}>장바구니 {result}</Link>
      </nav>
    </header>
  );
};

export default Header;
