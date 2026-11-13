"use client";

import { ItemProps, TCartItem } from "@/src/Item";
import { useEffect, useState } from "react";

const CART_KEY = "cart";
const CART_EVENT = "cart-change";

const readCart = (): TCartItem[] => {
  const cart = window.localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};
const writeCart = (data: TCartItem[]) => {
  window.localStorage.setItem(CART_KEY, JSON.stringify(data));
  window.dispatchEvent(new Event(CART_EVENT));
};

export const addToCart = (item: Omit<TCartItem, "count">) => {
  const data = readCart();
  const found = data.find((v) => v.id == item.id);
  if (found) {
    found.count += 1;
  } else {
    data.push({ ...item, count: 1 });
  }
  writeCart(data);
};

export const qtySub = (item: TCartItem) => {
  const data = readCart();
  const found = data.find((v) => v.id == item.id);
  if (found) {
    const result = data.map((v) => (v.id === found.id ? { ...v, count: v.count == 1 ? 1 : v.count - 1 } : v));
    writeCart(result);
  }
};

export const qtyAdd = (item: TCartItem) => {
  const data = readCart();
  const found = data.find((v) => v.id == item.id);
  if (found) {
    const result = data.map((v) => (v.id === found.id ? { ...v, count: v.count + 1 } : v));
    writeCart(result);
  }
};

export const removeToCart = (item: Omit<TCartItem, "count">) => {
  const data = readCart();
  const found = data.find((v) => v.id == item.id);
  if (found) {
    const filteredData = data.filter((v) => v.id != item.id);
    writeCart(filteredData);
  }
};

export const useCart = () => {
  const [total, setTotal] = useState<TCartItem[]>([]);

  useEffect(() => {
    const read = () => setTotal(readCart());
    read();
    window.addEventListener(CART_EVENT, read);
    return () => window.removeEventListener(CART_EVENT, read);
  }, []);

  const result = total.reduce((a, c) => a + c.count, 0);
  return { total, result };
};
