import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => (
  <section className="grid grid-cols-auto-fit gap-8 p-1">
    {popularProducts.map((product) => (
      <Product product={product} key={product.id} />
    ))}
  </section>
);

export default Products;
