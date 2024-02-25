import { productsData } from "../../Data/posData";

const AllProducts = () => {
  return (
    <section className="grid grid-cols-5 gap-6 px-8 text-center text-[#637381] mt-8">
      {productsData.map((product) => (
        <div key={product.id} className=" border-2 border-[#637381]">
          <img className="w-full" src={product.img} alt="" />
          <p className="my-2 text-2xl font-semibold">${product.price}</p>
          <h5 className="mt-2 text-xl border-t-2">{product.name}</h5>
        </div>
      ))}
    </section>
  );
};

export default AllProducts;
