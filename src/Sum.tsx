"use client";
import { useCart } from "@/utils/hooks";

const Sum = () => {
  const { total } = useCart();
  return (
    <div className="flex justify-between items-center">
      <div>결제금액</div>
      <div>{total.reduce((a, c) => a + c.count * c.price, 0)}</div>
    </div>
  );
};

export default Sum;
