import ProductCard from "@/components/component/ProductCard";
import { products } from "@/components/data";

const Products = () => {
  return (
    <main>
      <section className="my-10">
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard item={product} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
