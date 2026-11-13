import { products } from "@/data/items";
import Item from "@/src/Item";
import Title from "@/src/Title";

export default function Home() {
  return (
    <>
      <Title title="마켓" />
      <section className="grid grid-cols-5 gap-4">
        {products.map((v) => (
          <Item key={v.id} {...v} />
        ))}
      </section>
    </>
  );
}
