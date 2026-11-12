import { products } from "@/data/items";
import Item from "@/src/Item";

export default function Home() {
  return (
    <section className="grid grid-cols-5 gap-4">
      {products.map((v) => (
        <Item key={v.id} {...v} />
      ))}
    </section>
  );
}
