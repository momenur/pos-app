import Categories from "../../components/ui/Categories";
import Search from "../../components/ui/Search";
import AllProducts from "./AllProducts";

const Products = () => {
  return (
    <div className="col-span-7 bg-[#F4F6F8]">
      <Search />
      <Categories />
      <AllProducts />
    </div>
  );
};

export default Products;
