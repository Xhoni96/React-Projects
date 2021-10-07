import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => (
  <section>
    <div className="flex py-4 gap-3 p-1">
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  </section>
);

export default Categories;
